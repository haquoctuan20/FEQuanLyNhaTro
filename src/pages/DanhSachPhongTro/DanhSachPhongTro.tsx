import { SearchOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Drawer, Grid, Pagination, Row } from "antd";
import LayoutPublic from "components/Layouts/LayoutPublic";
import TitlePagePublic from "components/TitlePagePublic";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import FilterPhongTro from "./components/FilterPhongTro";
import PhongTro from "./components/PhongTro";

const { useBreakpoint } = Grid;

function DanhSachPhongTro() {
  const screens = useBreakpoint();

  const [visibleFilter, setVisibleFilter] = useState(false);

  const openFilterPhongTro = () => {
    setVisibleFilter(true);
  };

  const onClose = () => {
    setVisibleFilter(false);
  };

  return (
    <LayoutPublic>
      <Wrapper>
        <TitlePagePublic title={["Trang chủ", "Phòng trọ"]} />

        <Container className="mt-3">
          <Row gutter={[18, 8]}>
            <Col lg={6} xs={0}>
              <FilterPhongTro />
            </Col>

            <Col lg={18} xs={24}>
              <Row>
                <Col xs={20} lg={24}>
                  <Divider orientation="left">100 Phòng</Divider>
                </Col>
                <Col xs={2} offset={2}>
                  {!screens.lg && (
                    <Button
                      type="primary"
                      icon={<SearchOutlined />}
                      onClick={openFilterPhongTro}
                    />
                  )}
                </Col>
              </Row>

              <Drawer
                title="Tìm phòng trọ"
                placement="right"
                onClose={onClose}
                visible={visibleFilter}
                style={{ marginTop: "64px" }}
                width={270}
                mask={false}
              >
                <FilterPhongTro />
              </Drawer>

              {/* PHONG TRO */}
              <Row>
                <Col md={12} lg={24} xl={12} xs={24}>
                  <PhongTro />
                </Col>
                <Col md={12} lg={24} xl={12} xs={24}>
                  <PhongTro />
                </Col>
                <Col md={12} lg={24} xl={12} xs={24}>
                  <PhongTro />
                </Col>
                <Col md={12} lg={24} xl={12} xs={24}>
                  <PhongTro />
                </Col>
                <Col md={12} lg={24} xl={12} xs={24}>
                  <PhongTro />
                </Col>
                <Col md={12} lg={24} xl={12} xs={24}>
                  <PhongTro />
                </Col>
                <Col md={12} lg={24} xl={12} xs={24}>
                  <PhongTro />
                </Col>
                <Col md={12} lg={24} xl={12} xs={24}>
                  <PhongTro />
                </Col>
                <Col md={12} lg={24} xl={12} xs={24}>
                  <PhongTro />
                </Col>
                <Col md={12} lg={24} xl={12} xs={24}>
                  <PhongTro />
                </Col>
              </Row>

              <div className="pagination">
                <Pagination defaultCurrent={1} total={50} />
              </div>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </LayoutPublic>
  );
}

export default DanhSachPhongTro;

const Wrapper = styled.div`
  min-height: calc(100vh - 66px);
  .pagination {
    display: flex;
    justify-content: center;
    margin: 20px 0px;
  }
`;
