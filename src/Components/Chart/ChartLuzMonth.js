import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { getPriceLightServiceMonth } from '../../services/ApiServices';
import Load from "../Utils/Load";

const ChartLuzMonth = () => {
    const [infoPrice, setInfoPrice] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const meses = ['','Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

    useEffect(() => {
        const fetchTarifasLuz = async () => {
            try {
                const response = await getPriceLightServiceMonth();
                setInfoPrice(response.reverse().slice(0,12).reverse());
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
            categories: infoPrice.map((item) => meses[Math.round(item.month)])
        },
    };


    const series = [
        {
            name: "Precio",
            data: infoPrice.map((item) => Math.round(item.averagePrice)/1000)
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

export default ChartLuzMonth;
