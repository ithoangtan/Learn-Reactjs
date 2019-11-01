import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    //Nên createRef() trong constructor
    this.inputElement = React.createRef();

    debugger; //Kỹ thuật debug với một break trong code
    this.inputElement.current.focus();
    // Ở đây nó sẽ báo lỗi vì HTMLDOM chưa được tạo
  }

  componentDidMount() {
    // Sau khi DOM đã dược tạo xong rồi
    this.inputElement.current.focus();
  }

  componentDidMount() {
    // Gọi lần đầu tiên khi các element được
    //khởi tạo và gán vào DOM
    // Được gọi một lần duy nhất
    // Nên gọi API ở đây để lấy data
  }
  componentDidUpdate() {
    // Gọi ngay sau khi render() được gọi
    //có 2 thứ: state, props thay đổi
    // Tùy tình huống sẽ dùng để gọi API
    // Save data
  }
  componentWillUnmount() {
    // Gọi trước khi Unmout
    // Nên remove setTimeOut, setInterval.... ở đây
    
  }

    shouldComponentUpdate(nextProps, nextState) {
      // Khi state count không thay đổi thì không
      //cần render lại component này nữa
      if (this.state.count === nextState.count) return false;
      return true; 
    }

  onClick(event) {
    // Bắt sự kiện nhấn nút của người dùng sau đó gọi
    this.inputElement.current.reset();
  }

  render() {
    return (
      <div className="Accordion">
        <div type="text" ref={this.inputElement}></div>
      </div>
    );
  }
}
