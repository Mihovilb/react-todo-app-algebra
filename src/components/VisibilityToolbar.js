import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

export default function VisibilityToolbar() {
  return (
    <ToggleButtonGroup type="radio" name="visibility" defaultValue={"all"}>
      <ToggleButton id="1" value="all">
        Svi
      </ToggleButton>
      <ToggleButton id="2" value="active">
        Aktivni
      </ToggleButton>
      <ToggleButton id="3" value="completed">
        Dovršeni
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
