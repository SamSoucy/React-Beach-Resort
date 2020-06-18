import React from 'react'
import RoomsFilter from "./RoomFilter";
import RoomsList from "./RoomList";

export default function RoomsContainer() {
    return (
        <div>
            hello from rooms container
            <RoomsFilter />
            <RoomsList />
        </div>
    );
}
