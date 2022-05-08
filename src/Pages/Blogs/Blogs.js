import React from 'react';

const Blogs = () => {
    return (
        <div className="container my-4 mb-5">
            <h1 className="text-center services-title">Question & Answer</h1>
            <div>
                <h3>Difference between javascript and nodejs.</h3>
                <div>
                    <table className="table-bordered  text-center w-75">
                        <thead>
                            <tr>
                                <th scope="col">JavaScript</th>
                                <th scope="col">NodeJs</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Javascript is a programming language that's used for writing scripts on the website.</td>
                                <td>NodeJS is a Javascript runtime environment.</td>
                            </tr>
                            <tr>
                                <td>JavaScript is basically used on the client-side.</td>
                                <td>NodeJs is mostly used on the server-side.</td>
                            </tr>
                            <tr>
                                <td>Javascript is used in frontend development.</td>
                                <td>Nodejs is used in server-side development.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="my-4">
                <h3> When should you use nodejs and when should you use mongodb?</h3>
                <div>
                    <p> Still, assessing the pros and cons of erecting my mound around JavaScript and the tools using it, If I've a web operation design in mind I most presumably. Sooner or latterly, I'll suppose of the backend development platform, and surely come acrossNode.js.</p>
                    <p>I will use mongodb database when my data needs to stored in a database.</p>
                </div>
            </div>
            <div>
                <h3>Difference between SQL and Non SQL.</h3>
                <div>
                    <table className="table-bordered  text-center w-75">
                        <thead>
                            <tr>
                                <th scope="col">SQL</th>
                                <th scope="col">Non SQL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>SQL databases are relational</td>
                                <td>NoSQL databases are non-relational.</td>
                            </tr>
                            <tr>
                                <td>SQL databases are vertically scalable</td>
                                <td>NoSQL databases are horizontally scalable.</td>
                            </tr>
                            <tr>
                                <td>SQL Database Tables with fixed rows and columns</td>
                                <td>Non Sql Tables with not fixed rows and columns.Its dynamic columns and rows.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <h3>What is the purpose of jwt and how does it work?</h3>
                <p>JWT, or JSON Web Token, is an open standard used to partake security information between two parties — a customer and a garçon. Each JWT contains decoded JSON objects, including a set of claims. JWTs are inked using a cryptographic algorithm to insure that the claims can not be altered after the commemorative is issued. </p>
                <p>JWTs can be translated, but they're generally decoded & inked. We'll be fastening on Inked JWTs. The purpose of Inked JWT isn't to hide the data but to insure the authenticity of the data. And that's why it’s largely recommended to use HTTPS with Inked JWTs.</p>
            </div>
        </div>
    );
};

export default Blogs;