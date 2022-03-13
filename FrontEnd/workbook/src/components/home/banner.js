import React, { useState } from 'react';
import styled from 'styled-components';

export default function Banner() {
    return (
        <>
            <BannerBox>
                <div>
                    <BannerText size="20px">현재
                        <BannerText size="30px" weight="bold">
                            &nbsp;0,004명
                        </BannerText>의 학생 분들이
                        <BannerText size="30px" weight="bold">
                            &nbsp;662개
                        </BannerText>에 달하는 내풀 문제집을 풀고 있습니다!
                    </BannerText>
                </div>
                <div>
                    <BannerText size="30px">당장 시험 준비를 해야한다면?</BannerText>
                </div>
                <ButtonBox>
                    <Btn href="#" bg="white" border="0.5px solid #b6b6b6">👀 전체 문제 보러가기</Btn>
                    <Btn href="/Join" bg="#2f80ed" color="white">🙌 회원가입 하러가기</Btn>
                </ButtonBox>
            </BannerBox>
            <NotionBox>
                <Notion>
                    <MainNotion href="#">[안내] 정보처리기사 자격증 관련 서비스 안내</MainNotion>
                    <WholeBtn href="#">전체보기</WholeBtn>
                </Notion>
            </NotionBox>
        </>
    )
}

//배너
const BannerBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 300px;
    background: url(/img/background.svg) center/100% no-repeat; 
`
const BannerText = styled.span`
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
`
const ButtonBox = styled.button`
    display: flex;
`
const Btn = styled.a`
    display: block;
    width: 265px;
    height: 50px;
    background-color: ${props => props.bg};
    color: ${props => props.color};
    border: ${props => props.border};
    border-radius: 6px;
    font-size: 17px;
    line-height: 50px;
    margin: 0 10px;
`

//공지사항
const NotionBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 170px;
`
const Notion = styled.div`
    width: 1000px;
    height: 50px;
    background-color: #2f80ed;
    text-align: center;
`
const MainNotion = styled.a`
    display: inline-block;
    color: white;
    line-height: 50px;
`
const WholeBtn = styled.a`
    position: absolute;
    color: white;
    line-height: 50px;
    text-decoration: underline;
    margin-left: 290px;
`