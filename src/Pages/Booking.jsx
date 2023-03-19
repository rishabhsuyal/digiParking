
import { Link, useParams } from 'react-router-dom';
import Block from '../Component/Block/Block';
import "./Booking.css";
import { useNavigate } from 'react-router-dom'
import {useLocation} from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import React, { useEffect } from "react";
import { rows, rows2 } from "./data";
import { useSelector } from "react-redux";
const Silver = ["A", "B", "C", "D"];
const ticketList = {
    silver: [],
    platinium: [],
    price: 0,
};

function Booking(
    seatingActive = false,
    movie_name = "Tom And Jerry",
    timeAndDate = "Tomorrow, 12 Mar, 10:30 AM",
    type1 = "SILVER (With Car Cleaning)",
    type2 = "Premium",
    ticketPrice1 = 112,
    ticketPrice2 = 100,
    ticketListfunc,
    handleCloseSeatingModal,
    handleCloseSeatingButton,
) {
    const location = useLocation()
    console.log(location.state);
    const [seatActive, setSeatActive] = React.useState(seatingActive);
    const [active, setActive] = React.useState(false);
    const [rowsData, setRowData] = React.useState(rows);
    const [rowsData2, setRowData2] = React.useState(rows2);
    const [price, setPrice] = React.useState(0);
    const movie_details = {
        movie_name: "BAHUBALI",
        cinemas_name: "Rajhan",
        date: "11/11/2001",
        time: "11:50",
    };


    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];


    // console.log(seatingActive);

    const handleClick = (value) => {
        setRowData(
            rowsData.map((e) =>
                e.id === value ? { ...e, isSelected: !e.isSelected } : e
            )
        );

        setRowData2(
            rowsData2.map((e) =>
                e.id === value ? { ...e, isSelected: !e.isSelected } : e
            )
        );
    };
    React.useEffect(() => {
        let a = rowsData.filter((e) => e.isSelected).length;
        let b = rowsData2.filter((e) => e.isSelected).length;

        setPrice(a * ticketPrice1 + b * ticketPrice2);
        setActive(price > 0 ? true : false);
    }, [price, rowsData, rowsData2]);


    const handleSeat = () => {
        rowsData.forEach((e) =>
            e.isSelected ? ticketList.silver.push(e.seat) : ""
        );
        rowsData2.forEach((e) =>
            e.isSelected ? ticketList.platinium.push(e.seat) : ""
        );
        ticketList.price = price;
        //ticketListfunc(ticketList);
        console.log(ticketList);
        setSeatActive(false);
        handleCloseSeatingModal(ticketList);
    };
    return (
        <div>
            <div
                style={
                    seatingActive
                        ? {
                            display: "block", zIndex: 1000, position: "absolute", top: "9.4%", left: 0, height: "100vh"
                        }
                        : { display: "none" }
                }
                className="seatingModal"
            >
                <div className="seatingModal__nav">
                    <div>
                        <div>
                            <h4 style={{ color: "white", fontSize: 20 }}>{location.state.movie_name}</h4>
            
                        </div>
                        <div className='flex gap-2'>
                        <div className='p-1'>
                            <img className='w-10 rounded-full' src="https://images.news18.com/ibnlive/uploads/2022/09/rishabh-pant-flaunts-the-new-team-india-jersey.jpg" />
                            <p className='text-sm'>Mukesh Bhat</p>
                        </div>

                        <div className='p-1'>
                            <img className='w-10 rounded-full' src="https://images.news18.com/ibnlive/uploads/2022/09/rishabh-pant-flaunts-the-new-team-india-jersey.jpg" />
                            <p className='text-sm'>Munesh Bhat</p>
                        </div>
                    </div>

                    </div>
                    <div>
                        <h3>{location.state.date} {monthNames[new Date().getMonth()]} {location.state.time}</h3>
                    </div>
                </div>
                <div className="seatingModal__seatContainer">
                    <div>
                        <h5>
                            {type1}-Rs. {ticketPrice1}
                        </h5>

                        <div className="seatingModal__seatContainer_can">
                            <div style={{ display: "grid" }}>
                                {Silver.map((e) => (
                                    <div style={{ margin: 10, color: "gray" }} key={e}>
                                        {e}
                                    </div>
                                ))}
                            </div>
                            <div className="seatingModal__seatContainer_seats">
                                {rowsData.map((e) => (
                                    <div
                                        onClick={() => handleClick(e.id)}
                                        className={
                                            e.disable
                                                ? "disable"
                                                : e.isReserved
                                                    ? "reserved"
                                                    : e.isSelected
                                                        ? "select"
                                                        : "seats"
                                        }
                                        key={e.id}
                                    >
                                        <p>{e.number}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <h5>
                            {type2}-Rs. {ticketPrice2}
                        </h5>
                        <div className="seatingModal__seatContainer_can">
                            <div style={{ display: "grid" }}>
                                {Silver.map((e) => (
                                    <div style={{ margin: 10, color: "gray" }} key={e}>
                                        {e}
                                    </div>
                                ))}
                            </div>
                            <div className="seatingModal__seatContainer_seats">
                                {rowsData2.map((e) => (
                                    <div
                                        onClick={() => handleClick(e.id)}
                                        className={
                                            e.disable
                                                ? "disable"
                                                : e.isReserved
                                                    ? "reserved"
                                                    : e.isSelected
                                                        ? "select"
                                                        : "seats"
                                        }
                                        key={e.id}
                                    >
                                        <p>{e.number}</p>
                                    </div>
                                ))}
                            </div>
                        </div>


                    </div>
                </div>
                <div
                    style={active ? { display: "block" } : { display: "none" }}
                    className="PriceButton"
                >
                    <Link to='/payment' state={price}>
                    <button
                        onClick={() => handleSeat()}
                        style={{ height: 40, margin: 10, marginLeft: "40%", cursor: "pointer" }}
                    >
                        Rs. {price}
                    </button>
                    </Link>
                </div>
            </div>



        </div>
    )
}

export default Booking