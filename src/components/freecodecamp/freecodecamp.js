import React from "react";
import styled from "styled-components";

class FreeCodeCamp extends React.Component {

    render () {

        return (
            <div>
                <h2>FreeCodeCamp</h2>
                <a target="_blank" rel="noopener" href="https://luciopalmieri.com/fcc/">Projects & Certifications </a>
            </div>
        );
    }
}

export default styled(FreeCodeCamp)`
  position: relative;
`