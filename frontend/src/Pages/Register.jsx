import React from 'react'
import styled from 'styled-components'
import HeaderImage from 'Static/header.png'
import { Link } from 'react-router-dom';

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

function Register() {
    return (
        <Page>
            <Header>
                <Content>
                    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                        <div className="w-full max-w-md space-y-8">
                            <div>
                                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-200">
                                    Register a user account
                                </h2>
                                <p className="mt-2 text-center text-sm text-gray-200 font-bold">
                                Or{' '}
                                <Link to={"/"} className="font-bold text-[#feb0bd]">
                                    return to the main page
                                </Link>
                                </p>
                            </div>
                            <form className="mt-3 space-y-2" action="#" method="POST">
                                <input type="hidden" name="remember" defaultValue="true" />
                                <div className="-space-y-px rounded-md shadow-sm">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">
                                    Email address
                                    </label>
                                    <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Email address"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">
                                    Password
                                    </label>
                                    <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Password"
                                    />
                                </div>
                                </div>

                                <button
                                    type="submit"
                                    className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    
                                    </span>
                                    Sign in
                                </button>
                            </form>
                        </div>
                    </div>
                </Content>
            </Header>
        </Page>
    );
}

export default Register;