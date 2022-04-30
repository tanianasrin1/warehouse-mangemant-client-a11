import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container mt-5 '>
            <h2 className='blogs-title text-center mt-3'>This is Blogs Page!!!</h2>
            
             <div>
            
                <strong>   Difference between javascript and nodejs</strong>
             
                <ul>
                     javascript
                    <li>Javascript is a computer  language  that is used  to writer the website script</li>
                    <li>javascript runs only in the browsers</li>
                    <li>It is used on the client  site basically</li>
                    <li>javascript has the ability  to ads HTML and play  with DOM.</li>
                    <li>Random Js, typedjs are some javascript  framework</li>
                </ul>

                <ul>
                    Node.js
                   <li>Nodejs is a javascript Runtime environment</li>
                   <li>without nodes js help we can run javascript outside of the browser</li>
                   <li>It is used on the server side mostly</li>
                   <li>Node js is not capable to add HTML tags</li>
                   <li>Lodash express are some node js modules</li>
                </ul>
             </div>

             <div>
                 <strong>Differences between sql and nosql databases</strong>

                 <ul>
                     SQL 
                     <li>Rational Database</li>
                     <li>Vertically scalable</li>
                     <li>Table based database</li>
                     <li>pre define schema</li>
                     <li>Uses SQL</li>
                     <li>Not Preferred for Large Datasets</li>
                 </ul>

                 <ul>
                     NoSQL
                     <li>Non relationl Distributed database</li>
                     <li>Horizontally scalable</li>
                     <li>Document Based Graph based or  key value pair</li>
                     <li>dynamic  schema</li>
                     <li>Uses UnQL ( unstructured Query  Language)</li>
                     <li>Largely Preferred  for large Dataset</li>
                 </ul>
             </div>

             <div>
                 <strong>What is the purpose of jwt and how does it work</strong>
                <br />
                 <span className='fw-bold'>JWT:</span>
                 <p>JWT, or JSON Web Token, is an open standard used to share 
                    security information between two parties — a client and 
                    a server. Each JWT contains encoded JSON objects, including
                    a set of claims. JWTs are signed using a cryptographic algorithm
                    to ensure that the claims cannot be altered after the token is issued.</p>

                    <span className='fw-bold'>Purpose of jwt </span>
                    <br />
                    <p></p>

                    <span className='fw-bold'>How does JWT works:</span>  
                    <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, includinga set of claims. JWTs are signed using a cryptographic algorithmto ensure that the claims cannot be altered after the token is issued.The JOSE (JSON Object Signing and Encryption) header contains the tyof token — JWT in this case — and the signing algorithm.  The payload contains the claims. This is displayed as a JSON string,usually containing no more than a dozen fields to keep the JWT compact.This information is typically used by the server to verify that the userhas permission to perform the action they are requesting.There are no mandatory claims for a JWT, but overlaying standards may makeclaims mandatory. For example, when using JWT as bearer access token underOAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. The signature ensures that the token hasn’t been altered. The party that creates theJWT signs the header and payload with a secret that is known to both the issuer and receiver,or with a private key known only to the sender. When the token is used, the receiving partyverifies that the header and payload match the signature.</p>
             </div>
            
        </div>
    );
};

export default Blogs;