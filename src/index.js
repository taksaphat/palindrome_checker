import React from "react";
import ReactDOM from "react-dom";

function isPalindrome(str1) {
  var reverse = str1.split("").reverse().join("");
  return str1 === reverse;
}

function longestPalindrome(str1) {
  var max_length = 0,
    maxp = "";

  for (var i = 0; i < str1.length; i++) {
    var subs = str1.substr(i, str1.length);

    for (var j = subs.length; j >= 0; j--) {
      var sub_subs_str = subs.substr(0, j);
      if (sub_subs_str.length <= 1) continue;

      if (isPalindrome(sub_subs_str)) {
        if (sub_subs_str.length > max_length) {
          max_length = sub_subs_str.length;
          maxp = sub_subs_str;
        }
      }
    }
  }
  return maxp;
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Output: " + longestPalindrome(this.state.value));
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Input:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
  );