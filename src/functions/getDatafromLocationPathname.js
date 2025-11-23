import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function GetDataFromLocationPathName(
  inputData,
  setIsDataFound,
  setMainData,
  apiEndPoint,
  API_KEY,
  location,
  substringNumber,
  responseModel
) {
  const navigate = useNavigate();
  const LocationTitle = decodeURIComponent(
    location.pathname.substring(substringNumber)
  );

  useEffect(() => {
    if (inputData.length !== 0) {
      const foundInputData = inputData.find(
        (input) => input.titleText === LocationTitle
      );

      if (foundInputData) {
        setIsDataFound(true);
        setMainData(foundInputData);
      } else {
        setIsDataFound(false);
        // Redirect to a 404 page or another route if course is not found
        navigate("/not-found", { replace: true });
      }
    } else {
      axios
        .get(apiEndPoint, {
          headers: {
            "x-api-key": API_KEY,
          },
        })
        .then((response) => {
          const foundData =
            responseModel === "data"
              ? response.data.data.find(
                  (input) => input.titleText === LocationTitle
                )
              : response.data.find(
                  (input) => input.titleText === LocationTitle
                );

          if (foundData) {
            setIsDataFound(true);
            setMainData(foundData);
          } else {
            setIsDataFound(false);
            // Redirect to a 404 page or another route if course is not found
            navigate("/not-found", { replace: true });
          }
        });
    }
  }, [location.pathname, navigate]);
}
