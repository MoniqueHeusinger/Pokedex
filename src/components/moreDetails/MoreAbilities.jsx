import { useContext } from "react";
import { FetchData } from "../../context/Context";
import { useParams } from "react-router-dom";

const MoreAbilities = () => {
  const abilityParams = useParams();
  console.log(abilityParams);
  const myData = useContext(FetchData);
  const singelData = myData.data.find(
    (dataItem) => dataItem.id.toString() === abilityParams.id.toString()
  );
  console.log(singelData);

  return (
    <div>
      <h5>All Abilities</h5>
      <p>
        {singelData ? (
          singelData.abilities.map((abilityItem, index) => (
            <p key={index}>{abilityItem.ability.name} </p>
          ))
        ) : (
          <p>loading</p>
        )}
      </p>
    </div>
  );
};

export default MoreAbilities;
