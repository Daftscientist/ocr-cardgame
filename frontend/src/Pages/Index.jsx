import React from 'react'
import styled from 'styled-components'
import HeaderImage from 'Static/header.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';

library.add(faRightToBracket, faUserPlus);

const Header = styled.section`
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat, repeat;
    background-position: bottom;
    background-size: cover;
    background-image: url(${HeaderImage});
`;

const Content = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);  
`;

const Page = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRMYHSggGBolGxUVITEhJSk3Oi4uFx8zODM4NygtLjcBCgoKDQ0NDg0NDysZFRk3KysrNy0rKy0tKystNysrKysrKzcrLSsrKysrLSsrKysrLSsrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAADAAECBAX/xAAYEAEBAQEBAAAAAAAAAAAAAAAAEhEBAv/EABkBAQEBAQEBAAAAAAAAAAAAAAABAwIGBf/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwDw4zCSsejr4w8WO8bgDxY7xYA8WExYA8WExmA4xmExYA8WO8WAPFhMWAPFjvG4A8WO8WAPFhMZgOMWO8WAPFjvFgOMWO8WA4xmExYDjGYTFgDxY7xYDjFjvFgDxuO8WA9eLCYscgsUklYDiWSTFIDlYTFgDlSSVIClmFxYApWFlklBY2SSpAWLCypWgpUllYUDKksswoPGSWVhQUrCYsAeLCYzAHiwmLCg8WExYUHiwkqQFiwkqVB4sJKwHsxYTFjOqPFjvG4UFiwuMwqDxYTFhQeLCYsKo8ZhMUlB4sJKlaClYTFhQeLCYsEHiwmMwUeMwsswQeLCYpAcswuMwB4pJikB4ySSsAeKSYpUHjMLKwoOVhMZJQeLCSpKPZKksqXFdClYSVJQcqSSpKClSWVJQUrCyySg8ZJZUiClYWWSApUllSApWFlSApUllkgKVJZZIClSWWSUFKksqVBSpLLJQFiwsqVBYsJKkB4sJKwB4zC4zAHiwmKQe6WSaWS4qilSWVJQUqSypKClSWVJQUsk0qSgZUmlklAypNLJKCxSWVJQMqSypKClSaWSUDKksqSgsZJZUrQUqSypKBlSWVIClklxSApUllmAOWSWVIClYWWSApUllSD3ypLKlnVgpUllklIPGSWVIQUqSypKQUqSypKQUsk0slaQUqSypKBlSWVJQUqSypKQUsk0skpBSyTSySgpZJpZJQUqSypKBlSaWStAypNKkoGVJe+VJQMqSypKClkmlklBSpLKko+hKksqWddBlSaVJQMqSypKClSWVJQUqSypKBlSWVJQUsk0qSgZZJpUrQMqSypKClkmlSUDLJNKkoGVJpZJQMrvk0qSgJUmlklBSpLKkoGVJpZK1IGVJZUhBSyTSyQgpUllSUj6EqSypZV3AypNKkpAypLKkpBSpLKkpBSpLKkqQUqSypKsDKwsqSpAypLKlaQUqSS2SkDKksqSkDKksqSkFLJNLJKQUqSypKQMqS94pKgZUlxStBSyTSySgZUllSUFLJNKwoGVJZUlH0JUkxYxrSDlSTFi0gpUlxYUFKkuLCkFiwuLCgsZhcWFILFhZZJQUqSyySkHKkkqSkHLJLKlaQUsksqSkFLJNLJKkFKksqSkFLJLKwpAypLilaQUsk0skqQUsk0qSrAypLKkqQMqSypKR78ZhcWMa1gsWFlSUgpUllSUgpUllklSDlSSVK0gsUllSVYKWSWVJUgpUllklBypJKkoKVJZZi0g8ZhZUlIKVhMWFBYsJiwpB4yS4zCoOWYXFJQUqSSpKClSSVK0HLJLjMKg5WExYUe3FiTFrFixIIsWJBFixIFixIqMxuJFGYsSKLGY1KMxY1AzFiQMxYkCxmJKRYzEikUslIopZKRRSsYlRYsSCLGY1FGYsSUf/9k=");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

function Index() {
    return (
        <Page>
            <Header>
                <Content>
                    <h2 className="text-gray-200 text-center font-bold text-5xl">
                        Welcome to the
                        <br />
                        <span className="text-[#feb0bd]">
                            Card Game!
                        </span>
                    </h2>
                    <div className="text-gray-200 text-center text-3xl pt-2">
                        <Link to={"/login"} className="hover:scale-95 ease-in duration-100">
                            <FontAwesomeIcon icon="fa-solid fa-right-to-bracket" />
                        </Link>
                        
                        <Link to={"/register"} className="pl-4 hover:scale-95 ease-in duration-100">
                            <FontAwesomeIcon icon="fa-solid fa-user-plus" />
                        </Link>
                    </div>
                </Content>
            </Header>
        </Page>
    );
}

export default Index;