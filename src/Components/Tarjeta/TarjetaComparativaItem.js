import React from 'react'
import { Card, Table } from 'react-bootstrap'

export default function TarjetaComparativaItem({ data, title_1, title_2 }) {
    return (
        <Card className='tabla-comparativa-costos p-2 my-5 col-12 mx-auto'>
            <Card.Body>
                <Table>
                    <tr>
                        <th></th>
                        {
                            data?.map((item, index) => {
                                return <th key={index}><img src={item?.proveedor_logo} alt={item?.proveedor_nombre} /></th>
                            })
                        }
                    </tr>
                    {title_1 !== '' && <tr>
                        <th>{title_1}</th>
                        {
                            data?.map((item, index) => {
                                return <td key={index}>{item.selector_2} {item.precio_2} {item.divisa_2}</td>
                            })
                        }
                    </tr>}
                    {title_2 != '' && <tr>
                        <th>{title_2}</th>
                        {
                            data?.map((item, index) => {
                                return <td key={index}>desde {item.precio_1} {item.divisa_1}</td>
                            })
                        }
                    </tr>}
                </Table>
            </Card.Body>
        </Card>
    )
}
