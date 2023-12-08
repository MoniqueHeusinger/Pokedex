import { useContext } from "react";
import { FetchData } from "../../context/Context";
import { useParams } from "react-router-dom";

const MoreTypes = () => {
  const typeParams = useParams();

  console.log(typeParams);
  const myData = useContext(FetchData);
  const singelData = myData.data.find(
    (dataItem) => dataItem.id.toString() === typeParams.id.toString()
  );

  return (
    <div >
      <p className="moreWrapper">
        {singelData ? (
          singelData.types.map((typeItem, index) => (
            <p key={index}>{typeItem.type.name} </p>
          ))
        ) : (
          <p>loading</p>
        )}
      </p>
    </div>
  );
};

export default MoreTypes;
