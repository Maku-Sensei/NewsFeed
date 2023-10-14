import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faEuroSign,
  faYenSign,
} from "@fortawesome/free-solid-svg-icons";
import { Currency } from "./HeaderTypes";

const CurrencyIcon = ({ currency }: { currency: Currency }) =>
  currency === "USD" ? (
    <FontAwesomeIcon
      icon={faDollarSign}
      style={{ color: "#050505" }}
      size="sm"
    />
  ) : currency === "EUR" ? (
    <FontAwesomeIcon icon={faEuroSign} style={{ color: "#050505" }} size="sm" />
  ) : currency === "JPY" ? (
    <FontAwesomeIcon icon={faYenSign} size="sm" style={{ color: "#050505" }} />
  ) : (
    <FontAwesomeIcon
      icon={faDollarSign}
      style={{ color: "#050505" }}
      size="sm"
    />
  );

export default CurrencyIcon;
