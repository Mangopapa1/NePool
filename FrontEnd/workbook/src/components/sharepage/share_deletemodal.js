import React, { useEffect } from 'react';
import { API, COLORS } from '../../constants/index';
import styled from 'styled-components';
import axios from 'axios';

export default function ShareDeleteModal(props){

    const workbookid = props.workbookid
    const userid = props.userid
    const token = sessionStorage.getItem("token")
    
    const Sharedeleteworkbook = async() => {
        console.log(workbookid);
        console.log(userid);
        console.log(token)
        const res = await axios.delete(`${API}/share`,
        {
            data:{         
                work_book_id: workbookid,
                user_id: userid
            },
            headers:{
                'Content-type' : "application/json",
                Authorization : `Bearer ${token}` 
            }
        })
        window.location.reload();
        // console.log(res)
    }


    return(
        <>
            <Modal>
                <ImgDiv>
                    <Img onClick = { ()=>{ props.setSharedeletemodal(false) } } src="/img/x.svg" alt="x" />
                </ImgDiv>
                <Text>가져오기를 해제 하시겠습니까?</Text>
                <BtnDiv>
                    <NoBtn onClick={()=>{props.setSharedeletemodal(false)}}>아니오</NoBtn>
                    <YesBtn onClick = { Sharedeleteworkbook } >예</YesBtn>
                </BtnDiv>
            </Modal>
        </>
    )
} 


const Modal = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    border-radius: 5px;
    z-index:2;
    width:30%;
    height:26%;
    border:1px solid ${COLORS.light_gray};
    padding:0 1em;
    background-color: #fff;
`;

const ImgDiv = styled.div`
    display:flex;
    justify-content:end;
    margin:1em 0;
`;

const Img = styled.img`
    pointer-events: auto;
    cursor:pointer;
    width:14px;
    height:14px;
`;

const Text = styled.p`
    margin-top:1em;
    font-weight: 700;
    text-align:center;
    font-size:1rem;
    color: black;
`;


const BtnDiv = styled.div`
    margin-top:1em;
    display:flex;
    justify-content:center;
`;

const NoBtn = styled.div`
    cursor:pointer;
    width:28%;  
    height:2.5em;
    text-align:center;
    font-size:1rem;
    border-radius:5px;
    line-height:2.5rem;
    margin-right:0.3em;
    color:${COLORS.gray};
    border:1px solid ${COLORS.light_gray};
`;

const YesBtn = styled.div`
    cursor:pointer;
    width:28%;
    height:2.5em;
    text-align:center;
    font-size:1rem;
    border-radius:5px;
    line-height:2.5rem;
    margin-left:0.3em;
    color:#fff;
    background-color:${COLORS.blue};
`;