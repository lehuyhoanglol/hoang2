import React, { useRef, useEffect } from 'react';
const SolarSystem = () => {
 const canvasRef = useRef(null);
 const planets = [
 { name: 'Mercury', radius: 5, distance: 50, speed: 0.1, color: 'gray' },
 { name: 'Venus', radius: 10, distance: 70, speed: 0.07, color: 'yellow' },
 { name: 'Earth', radius: 10, distance: 100, speed: 0.05, color: 'blue' },
 { name: 'Mars', radius: 8, distance: 130, speed: 0.03, color: 'red' },
 { name: 'Jupiter', radius: 20, distance: 160, speed: 0.02, color: 'orange' },
 { name: 'Saturn', radius: 18, distance: 200, speed: 0.015, color: 'goldenrod' },
 { name: 'Uranus', radius: 15, distance: 240, speed: 0.01, color: 'lightblue' },
 { name: 'Neptune', radius: 15, distance: 280, speed: 0.008, color: 'blue' },
 ];
 useEffect(() => {
 const canvas = canvasRef.current;
 const ctx = canvas.getContext('2d');
 let animationFrameId;
 let angle = 0;
 const draw = () => {
 ctx.clearRect(0, 0, canvas.width, canvas.height); // Xóa canvas
 // Vẽ mặt trời
 ctx.beginPath();
 ctx.arc(canvas.width / 2, canvas.height / 2, 30, 0, Math.PI * 2);
 ctx.fillStyle = 'yellow';
 ctx.fill();
 ctx.closePath();
 // Vẽ các hành tinh
 planets.forEach((planet) => {
 angle += planet.speed; // Cập nhật góc
 const x = canvas.width / 2 + planet.distance * Math.cos(angle);
 const y = canvas.height / 2 + planet.distance * Math.sin(angle);
 ctx.beginPath();
 ctx.arc(x, y, planet.radius, 0, Math.PI * 2);
 ctx.fillStyle = planet.color;
 ctx.fill();
 ctx.closePath();
 });
 animationFrameId = requestAnimationFrame(draw); // Gọi hàm draw tiếptheo
 };
 draw(); // Bắt đầu vẽ
 return () => {
 cancelAnimationFrame(animationFrameId); // Dọn dẹp khi componentunmount
 };
 }, []);
 return <canvas ref={canvasRef} width={800} height={600} />;
};
export default SolarSystem;+- 