import { SearchOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Drawer, Grid, Pagination, Row } from "antd";
import LayoutPublic from "components/Layouts/LayoutPublic";
import Loading from "components/Loading";
import { NotificationError } from "components/Notification";
import TitlePagePublic from "components/TitlePagePublic";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { PhongTroClientService } from "service/PhongTroClientService";
import styled from "styled-components";
import FilterPhongTro from "./components/FilterPhongTro";
import PhongTro from "./components/PhongTro";

const { useBreakpoint } = Grid;

function DanhSachPhongTro() {
  const screens = useBreakpoint();

  const [visibleFilter, setVisibleFilter] = useState(false);
  const [triggerLoadList, setTriggerLoadList] = useState(true);

  const [listPhongTro, setListPhongTro] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [size] = useState(10);
  const [total, setTotal] = useState(0);

  const openFilterPhongTro = () => {
    setVisibleFilter(true);
  };

  const onClose = () => {
    setVisibleFilter(false);
  };

  const callbackPhongTro = () => {
    setTriggerLoadList(!triggerLoadList);
  };

  const handleGetPhongTro = (pageValue, timKiem: null | Object = null) => {
    let params = {
      page: pageValue,
      size,
    };

    if (timKiem !== null) {
      params = {
        ...params,
        ...timKiem,
      };
    }
    setLoading(true);
    PhongTroClientService.getPhongTro(params)
      .then((res) => {
        if (res.data.code !== 0) {
          return;
        }

        setListPhongTro(res.data.data);
        setTotal(res.data.total);
      })
      .catch((err) => {
        console.error(err);
        NotificationError("Lỗi", "");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChangePage = (page) => {
    setPage(page);
    handleGetPhongTro(page);
  };

  const handleTimKiem = (value: any) => {
    setPage(1);
    handleGetPhongTro(1, value);
  };

  const handleThietLapLai = () => {
    setPage(1);
    handleGetPhongTro(1);
  };

  useEffect(() => {
    handleGetPhongTro(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LayoutPublic triggerLoadList={triggerLoadList}>
      <Wrapper>
        <TitlePagePublic title={["Trang chủ", "Phòng trọ"]} />

        <Container className="mt-3">
          <Row gutter={[18, 8]}>
            <Col lg={6} xs={0}>
              <FilterPhongTro reset={handleThietLapLai} timKiem={handleTimKiem} />
            </Col>

            <Col lg={18} xs={24}>
              <Row>
                <Col xs={20} lg={24}>
                  <Divider orientation="left"> Có {total} Phòng</Divider>
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
                <FilterPhongTro reset={handleThietLapLai} timKiem={handleTimKiem} />
              </Drawer>

              {/* PHONG TRO */}
              {loading ? (
                <Loading />
              ) : listPhongTro.length > 0 ? (
                <Row gutter={[8, 0]}>
                  {listPhongTro.map((item, index) => (
                    <Col md={12} lg={24} xl={12} xs={24} key={index}>
                      <PhongTro callback={callbackPhongTro} data={item} />
                    </Col>
                  ))}
                </Row>
              ) : (
                <>Không tìm thấy phòng trọ nào</>
              )}

              <div className="pagination">
                <Pagination
                  pageSize={size}
                  current={page}
                  total={total}
                  onChange={handleChangePage}
                />
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
  background: #f5f5f5;

  .pagination {
    display: flex;
    justify-content: center;
    margin: 20px 0px;
  }
`;
