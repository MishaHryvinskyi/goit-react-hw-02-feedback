import styled from "@emotion/styled";

export const BtnContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #dacede;
    padding: 20px;
    border-radius: 50px;
    width: 200px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 60px;
    margin-top: 60px;
    border: solid 4px #deecfc;
    box-shadow: 0px 17px 42px -1px rgba(79,96,112,1);
`;

export const Button = styled.button`
    font-size: 18px;
    width: 100px;
    margin-right: auto;
    margin-left: auto;
    padding: 15px 20px;
    border-radius: 10px;
    border: none;
    background-color: #7bd6e8;
    color: black;
    &:not(:last-child){
        margin-bottom: 16px;
    }
    &:hover {
        background-color: #57274c;
        color: white;
`;