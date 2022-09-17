import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSSDropdown.css'

function DropDirectioExample() {
  return (
    <>
      <div id='dropdown-custom'>
        {['down'].map((direction) => (
          <DropdownButton            
            variant="secondary"
            title={`1003호`}
          >
            <Dropdown.Item eventKey="1">첫번째 그룹</Dropdown.Item>
            <Dropdown.Item eventKey="2">두번째 그룹</Dropdown.Item>
            <Dropdown.Item eventKey="3">세번째 그룹</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">그룹 나가기</Dropdown.Item>
          </DropdownButton>
        ))}
      </div>
    </>
  );
}

export default DropDirectioExample;