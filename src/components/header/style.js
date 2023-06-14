import styled from 'styled-components';

export const NavBar = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;

    .fa-bars {
        display: none;
    }

    @media (max-device-width: 991px) {
        width: 90%;

        .fa-bars {
            display: block;
        }
    }
`;

export const CompanyName = styled.label`
    cursor: pointer;
    display: block;
    width: 60%;
    font-size: 35px;
    padding: 20px 0;
    font-family: 'tertre', sans-serif;
    white-space: nowrap;
`;

export const NavList = styled.ul`
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    @media (max-device-width: 991px) {
        display: none;
        margin-top: 1rem;
        width: 100%;
        flex-direction: column;
        gap: 1.5rem;
    }

    &.show {
        display: flex;
    }
`;

export const NavListItem = styled.li`
    position: relative;
    font-weight: 600;

    a::before {
        content: '';
        position: absolute;
        bottom: -5px;
        left: -5px;
        width: 0;
        height: 4px;
        background-color: #229618;
        transition: width 0.2s ease-in-out;
    }

    a:hover::before,
    .active::before {
        width: calc(100% + 10px);
    }
    .active,
    a:hover {
        color: #191e2b;
    }
    a {
        color: #7d7d7d;
    }
`;
