import { Card, Col, Row, Container, CardBody, Button, Pagination, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export default function ProdukAdmin() {
  const items = Array.from({ length: 2 }).map((_, index) => index + 1);
  const [showTambahProduk, setShowTambahProduk] = useState(false);
  const [showUpdateProduk, setShowUpdateProduk] = useState(false);
  const [showHapus, setShowHapus] = useState(false);

  const handleCloseTambahProduk = () => setShowTambahProduk(false);
  const handleShowTambahProduk = () => setShowTambahProduk(true);
  const handleCloseUpdateProduk = () => setShowUpdateProduk(false);
  const handleShowUpdateProduk = () => setShowUpdateProduk(true);
  const handleCloseHapus = () => setShowHapus(false);
  const handleShowHapus = () => setShowHapus(true);

  return (
    <Container>
      <Row>
        <Col className="my-5">
          <Card className="overflow-hidden p-4 pt-2 pb-2 border-0 shadow-lg rounded-4">
            <CardBody>
              <Row className="mb-3">
                <Col>
                  <h4 className=" fw-bold">Produk</h4>
                </Col>
                <Col>
                  <div className="modal-tambah-produk d-flex justify-content-end">
                    {/* MODAL TAMBAH PRODUK */}
                    <Button variant="primary" className="btn-table rounded-pill custom-button" onClick={handleShowTambahProduk}>
                      Tambah Produk
                    </Button>

                    <Modal show={showTambahProduk} onHide={handleCloseTambahProduk} backdrop="static" keyboard={false}>
                      <Modal.Header closeButton>
                        <Modal.Title>Tambah Produk</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          {/* Left Column Modal*/}
                          <Row>
                            <Col md={6}>
                              <Form.Group className="mt-2 input">
                                <Form.Label>
                                  Nama Produk<span className="text-danger">*</span>
                                </Form.Label>
                                <div className="form-input position-relative ">
                                  <Form.Control type="text" className="form-control bg-light border-light password-input" placeholder="Masukkan Nama Produk" id="namaProduk" name="namaProduk" autoComplete="name" required />
                                </div>
                              </Form.Group>
                              <Form.Group className="mt-2 input">
                                <Form.Label>
                                  Harga<span className="text-danger">*</span>
                                </Form.Label>
                                <div className="form-input position-relative ">
                                  <Form.Control type="number" className="form-control bg-light border-light password-input" placeholder="Rp." id="harga" name="harga" autoComplete="harga" required />
                                </div>
                              </Form.Group>
                            </Col>

                            {/* Right Column */}
                            <Col md={6}>
                              <Form.Group className="mt-2 input">
                                <Form.Label>
                                  Stok<span className="text-danger">*</span>
                                </Form.Label>
                                <div className="form-input position-relative ">
                                  <Form.Control type="number" className="form-control bg-light border-light password-input" placeholder="masukkan jumlah stok" id="stok" name="stok" autoComplete="stok" required />
                                </div>
                              </Form.Group>
                              <Form.Group className="mt-2 input">
                                <Form.Label>
                                  Pilih Gambar<span className="text-danger">*</span>
                                </Form.Label>
                                <div className="form-input position-relative">
                                  <Form.Control type="file" accept="image/*" required />
                                </div>
                              </Form.Group>
                            </Col>
                          </Row>
                          {/* Self Column */}
                          <Row>
                            <Col>
                              <Form.Group className="mt-2 input">
                                <Form.Label>
                                  <b>
                                    Deskripsi<span className="text-danger">*</span>
                                  </b>
                                </Form.Label>
                                <div className="form-input position-relative">
                                  <Form.Control
                                    as="textarea"
                                    rows={8} // Sesuaikan jumlah baris sesuai kebutuhan
                                    className="form-control password-input bg-light"
                                    placeholder="Masukkan Deskripsi"
                                    id="deskripsi"
                                    name="deskripsi"
                                    autoComplete="deskripsi"
                                    required
                                  />
                                </div>
                              </Form.Group>
                            </Col>
                          </Row>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="danger" onClick={handleCloseTambahProduk}>
                          Batal
                        </Button>
                        <Button variant="success">Simpan</Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                </Col>
              </Row>
              <Row className="bg-light align-items-center align-middle ">
                <Col md={1}>
                  <div className="table-responsive  ">
                    <table className="table align-middle table-nowrap table-hover ">
                      <tr className="">
                        <th className="text-center justify-content-center">No</th>
                      </tr>
                    </table>
                  </div>
                </Col>
                <Col>
                  <div className="table-responsive">
                    <table className="table align-middle table-nowrap table-hover">
                      <tr>
                        <th className="text-center justify-content-center">Gambar Produk</th>
                      </tr>
                    </table>
                  </div>
                </Col>
                <Col>
                  <div className="table-responsive">
                    <table className="table align-middle table-nowrap table-hover">
                      <tr>
                        <th className="text-center justify-content-center">Nama Produk</th>
                      </tr>
                    </table>
                  </div>
                </Col>
                <Col>
                  <div className="table-responsive">
                    <table className="table align-middle table-nowrap table-hover">
                      <tr>
                        <th className="text-center justify-content-center">Harga</th>
                      </tr>
                    </table>
                  </div>
                </Col>
                <Col>
                  <div className="table-responsive">
                    <table className="table align-middle table-nowrap table-hover">
                      <tr>
                        <th className="text-center justify-content-center">Stok</th>
                      </tr>
                    </table>
                  </div>
                </Col>
                <Col>
                  <div className="table-responsive">
                    <table className="table align-middle table-nowrap table-hover">
                      <tr>
                        <th className="text-center justify-content-center">Action</th>
                      </tr>
                    </table>
                  </div>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col md={1}>
                  <div className="table-responsive ">
                    <table className="table align-middle table-nowrap table-hover">
                      <tr>
                        <td className="align-middle text-center ">1</td>
                      </tr>
                    </table>
                  </div>
                </Col>
                <Col>
                  <div className="table-responsive">
                    <table className="table align-middle table-nowrap table-hover">
                      <tr>
                        <td className="align-middle text-center">
                          <img src="/logo512.png" alt="Gambar Produk" width="80" height="80" />
                        </td>
                      </tr>
                    </table>
                  </div>
                </Col>
                <Col>
                  <div className="table-responsive">
                    <table className="table align-middle table-nowrap table-hover">
                      <tr className=" text-align-center ">
                        <td className="text-center justify-content-center">Bola Voly Lorem ipsum</td>
                      </tr>
                    </table>
                  </div>
                </Col>
                <Col>
                  <div className="table-responsive">
                    <table className="table align-middle table-nowrap table-hover">
                      <tr>
                        <td className="text-center justify-content-center">Rp99.000</td>
                      </tr>
                    </table>
                  </div>
                </Col>
                <Col>
                  <div className="table-responsive">
                    <table className="table align-middle table-nowrap table-hover">
                      <tr>
                        <td className="text-center justify-content-center">50</td>
                      </tr>
                    </table>
                  </div>
                </Col>
                <Col>
                  <div className="table-responsive">
                    <table className="table align-middle table-nowrap table-hover">
                      <tr>
                        <div className="text-center justify-content-center">
                          {/* MODAL Update PRODUK */}
                          <Link>
                            <Button variant="warning" size="sm" onClick={handleShowUpdateProduk}>
                              Update
                            </Button>

                            <Modal show={showUpdateProduk} onHide={handleCloseUpdateProduk} backdrop="static" keyboard={false}>
                              <Modal.Header closeButton>
                                <Modal.Title>Update Produk</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <Form>
                                  {/* Left Column Modal*/}
                                  <Row>
                                    <Col md={6}>
                                      <Form.Group className="mt-2 input">
                                        <Form.Label>
                                          Nama Produk<span className="text-danger">*</span>
                                        </Form.Label>
                                        <div className="form-input position-relative ">
                                          <Form.Control type="text" className="form-control bg-light border-light password-input" placeholder="Masukkan Nama Produk" id="namaProduk" name="namaProduk" autoComplete="name" required />
                                        </div>
                                      </Form.Group>
                                      <Form.Group className="mt-2 input">
                                        <Form.Label>
                                          Harga<span className="text-danger">*</span>
                                        </Form.Label>
                                        <div className="form-input position-relative ">
                                          <Form.Control type="number" className="form-control bg-light border-light password-input" placeholder="Rp." id="harga" name="harga" autoComplete="harga" required />
                                        </div>
                                      </Form.Group>
                                    </Col>

                                    {/* Right Column */}
                                    <Col md={6}>
                                      <Form.Group className="mt-2 input">
                                        <Form.Label>
                                          Stok<span className="text-danger">*</span>
                                        </Form.Label>
                                        <div className="form-input position-relative ">
                                          <Form.Control type="number" className="form-control bg-light border-light password-input" placeholder="masukkan jumlah stok" id="stok" name="stok" autoComplete="stok" required />
                                        </div>
                                      </Form.Group>
                                      <Form.Group className="mt-2 input">
                                        <Form.Label>
                                          Pilih Gambar<span className="text-danger">*</span>
                                        </Form.Label>
                                        <div className="form-input position-relative">
                                          <Form.Control type="file" accept="image/*" required />
                                        </div>
                                      </Form.Group>
                                    </Col>
                                  </Row>
                                  {/* Self Column */}
                                  <Row>
                                    <Col>
                                      <Form.Group className="mt-2 input">
                                        <Form.Label>
                                          <b>
                                            Deskripsi<span className="text-danger">*</span>
                                          </b>
                                        </Form.Label>
                                        <div className="form-input position-relative">
                                          <Form.Control
                                            as="textarea"
                                            rows={8} // Sesuaikan jumlah baris sesuai kebutuhan
                                            className="form-control password-input bg-light"
                                            placeholder="Masukkan Deskripsi"
                                            id="deskripsi"
                                            name="deskripsi"
                                            autoComplete="deskripsi"
                                            required
                                          />
                                        </div>
                                      </Form.Group>
                                    </Col>
                                  </Row>
                                </Form>
                              </Modal.Body>
                              <Modal.Footer>
                                <Button variant="danger" onClick={handleCloseUpdateProduk}>
                                  Batal
                                </Button>
                                <Button variant="success">Update</Button>
                              </Modal.Footer>
                            </Modal>
                          </Link>
                        </div>

                        <td className="text-center justify-content-center">
                          {/* MODAL HAPUS */}
                          <Link>
                            <Button className="Action" variant="danger" size="sm" onClick={handleShowHapus}>
                              Hapus
                            </Button>

                            <Modal className="Action" show={showHapus} onHide={handleCloseHapus} backdrop="static" keyboard={false}>
                              <Modal.Header closeButton>
                                <Modal.Title>Catatan!!</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>Apakah Anda yakin ingin menghapus produk ini?</Modal.Body>
                              <Modal.Footer>
                                <Button variant="danger" onClick={handleCloseHapus}>
                                  Batal
                                </Button>
                                <Button variant="success">Hapus</Button>
                              </Modal.Footer>
                            </Modal>
                          </Link>
                        </td>
                      </tr>
                    </table>
                  </div>
                </Col>
              </Row>

              {/* Pagination Section */}
              <Row>
                <Col className="d-flex justify-content-end ">
                  <Pagination className="primary">
                    <Pagination.First className="rounded-pill" />
                    <Pagination.Prev className="rounded-pill" />
                    {items.map((item) => (
                      <Pagination.Item key={item} className="rounded-pill">
                        {item}
                      </Pagination.Item>
                    ))}
                    <Pagination.Next className="rounded-pill" />
                    <Pagination.Last className="rounded-pill" />
                  </Pagination>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
