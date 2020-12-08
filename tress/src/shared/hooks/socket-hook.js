import io from "socket.io-client";
import { useState, useCallback, useEffect } from "react";

export const useSocket = () => {
    const [socketData, setSocketData] = useState([]);
    const [socket, setSocket] = useState("");

    useEffect(() => {
        // setSocket(io())
        setSocket(io(`${process.env.REACT_APP_BACKEND_BASE_URL}`));
    }, []);
    // console.log("socket", socket);

    const handleSocket = useCallback((broadcast) => {
        //     socket.on(broadcast, (data) => {
        //         setSocketData(data);
        //     });
    }, []);

    return {
        socketData,
        setSocketData,
        handleSocket,
        socket,
    };
};
