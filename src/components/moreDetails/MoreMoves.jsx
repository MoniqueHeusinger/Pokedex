import { useContext } from "react";
import { FetchData } from "../../context/Context";
import { useParams } from "react-router-dom";

const MoreMoves = () => {
  const moveParams = useParams();
  console.log(moveParams);
  const myData = useContext(FetchData);
  const singelData = myData.data.find(
    (dataItem) => dataItem.id.toString() === moveParams.id.toString()
  );
  console.log(singelData);
  return (
    <div>
      <h5>All Moves</h5>
      <p>
        {singelData ? (
          singelData.moves.map((moveItem, index) => (
            <p key={index}>{moveItem.move.name} </p>
          ))
        ) : (
          <p>loading</p>
        )}
      </p>
    </div>
  );
};

export default MoreMoves;
