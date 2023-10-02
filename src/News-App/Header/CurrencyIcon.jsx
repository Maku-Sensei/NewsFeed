import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faEuroSign,
  faYenSign,
} from "@fortawesome/free-solid-svg-icons";

const CurrencyIcon = ({ currency }) =>
  currency === "USD" ? (
    <FontAwesomeIcon
      icon={faDollarSign}
      style={{ color: "#050505" }}
      size="s"
    />
  ) : currency === "EUR" ? (
    <FontAwesomeIcon icon={faEuroSign} style={{ color: "#050505" }} size="sm" />
  ) : currency === "JPY" ? (
    <FontAwesomeIcon icon={faYenSign} size="s" style={{ color: "#050505" }} />
  ) : (
    <FontAwesomeIcon
      icon={faDollarSign}
      style={{ color: "#050505" }}
      size="s"
    />
  );

export default CurrencyIcon;
