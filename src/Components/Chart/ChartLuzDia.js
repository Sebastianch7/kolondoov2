import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { getPriceLightService } from '../../services/ApiServices';
import Load from "../Utils/Load";

const ChartLineal = () => {
    const [infoPrice, setInfoPrice] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTarifasLuz = async () => {
            try {
                const response = await getPriceLightService();
                setInfoPrice(response);
                setIsLoading(false);
            } catch (error) {
                console.error("Error al obtener informacion:", error);
            }
        };

        fetchTarifasLuz();
    }, []);

    const options = {
        colors: ['#79CFE2'],
        chart: {
            
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        xaxis: {
            categories: ['00h-01h', '01h-02h', '02h-03h', '03h-04h', '04h-05h', '05h-06h', '06h-07h', '07h-08h', '08h-09h', '09h-10h', '10h-11h', '11h-12h', '12h-13h', '13h-14h', '14h-15h', '15h-16h', '16h-17h', '17h-18h', '18h-19h', '19h-20h', '20h-21h', '21h-22h', '22h-23h', '23h-24h'],
        },
    };

    const series = [
        {
            name: "Precio",
            data: infoPrice.map((item) => Math.round(item.value)/1000)
        }
    ];

    return (
        <div className="container">
            <div className="row d-flex">
                <div className="col-12 col-md-8 mx-auto">
                    {isLoading ? (
                        <Load></Load>
                    ) : (
                        <Chart options={options} series={series} type="line" width="100%" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChartLineal;
