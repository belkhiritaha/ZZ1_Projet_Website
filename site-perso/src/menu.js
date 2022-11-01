import React from 'react';
import * as THREE from 'three';

function Menu(){
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    // set renderer background to transparent
    renderer.setClearColor( 0x000000, 0 );

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    const animate = function () {
        requestAnimationFrame( animate );

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render( scene, camera );
    };

    // select id canvas
    const canvas = document.getElementById('canvas');

    // add style to canvas

    document.body.style = 'background: #111;';
    document.body.style = "width: 100vw;";
    document.body.style = "height: 100vh;";


    // add p tag
    const p = document.createElement('p');
    p.innerHTML = 'hello world';
    // styel p
    p.style = 'color: 0x00ff00 !important; font-size: 2rem; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: transparent';
    document.body.appendChild(p);

    animate();


    return(
        <>
        <style>
            {`
                html {
                    background-color: black;
                }

                #root{
                    width: 0vw;
                    height: 0vh;
                }

                body {
                    background-color: black;
                }
                
                body::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 99vw;
                    height: 100vh;
                    background: repeating-linear-gradient(#0000004b, #0000004b 1px, transparent 2px, transparent 5px);
                    z-index: 10;
                }
                
            `}
        </style>

        <h1 style={{ position: "absolute", top: "20%", left: "50%", transform: "translate(-50%,-50%)" }} id="text">Projects</h1>
        </>
    );
}


export default Menu;