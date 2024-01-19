import React, { useEffect, useState } from 'react';
import { Container, Row, Col, CardGroup } from 'react-bootstrap';
import TarjetaItemBlog from '../Tarjeta/TarjetaItemBlog';
import ContenedorDestacados from '../Blog/ContenedorDestacados';
import { getBlog } from '../../services/ApiServices';
import Load from '../Utils/Load';
import ReactPaginate from 'react-paginate';

export default function ContenedorBlog({ categoria = null }) {
    const [fetchBlog, setFetchBlog] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true);
        const fetchBlogList = async () => {
            try {
                const response = await getBlog(categoria);
                setFetchBlog(response);
                setIsLoading(false);
            } catch (error) {
                console.error('Error al obtener blog:', error);
            }
        };
        fetchBlogList();
    }, []);

    function Items({ currentItems }) {
        return (
            <>
                <Row>
                    {currentItems && currentItems?.map((item, index) => (
                        <TarjetaItemBlog data={item} key={index} />
                    ))}
                </Row>
            </>
        );
    }

    function PaginatedItems({ itemsPerPage }) {
        const [currentItems, setCurrentItems] = useState(null);
        const [pageCount, setPageCount] = useState(0);
        const [itemOffset, setItemOffset] = useState(0);

        useEffect(() => {
            const endOffset = itemOffset + itemsPerPage;
            setCurrentItems(fetchBlog?.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(fetchBlog?.length / itemsPerPage));
        }, [itemOffset, itemsPerPage, fetchBlog]);

        const handlePageClick = (event) => {
            const newOffset = event.selected * itemsPerPage % fetchBlog?.length;
            console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
            setItemOffset(newOffset);
        };

        return (

            <Row>
                <Col xs={12}>
                    <CardGroup>
                        <Items currentItems={currentItems} />
                    </CardGroup>
                </Col>
                <Col xs={12} className='d-flex justify-content-center my-5'>
                    <ReactPaginate
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={pageCount}
                        previousLxabel="<"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                    />
                </Col>
            </Row>
        );

    }

    return (
        <Container className="my-4">
            <Row>
                <Col xs={12} md={8}>
                    {!isLoading ? <PaginatedItems itemsPerPage={10} /> : <Load></Load>}
                </Col>
                <ContenedorDestacados />
            </Row>
        </Container>
    );
}
