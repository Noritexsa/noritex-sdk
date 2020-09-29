import styled from "styled-components";

export const Control = styled.div`
	box-sizing: border-box;
  clear: both;
  font-size: 1.6rem;
  position: relative;
  text-align: inherit;
  margin-bottom: 0;
  ${props => props.isExpanded ? "display:block;width:100%;" : "display:inline-block;"};
  
	input {
	  -moz-appearance: none;
	  -webkit-appearance: none;
	  align-items: center;
	  border: 1px solid transparent;
	  border-radius: 4px;
	  box-shadow: none;
	  display: inline-flex;
	  font-size: 1.6rem;
	  height: 2.5em;
	  justify-content: flex-start;
	  line-height: 1.5;
	  padding-bottom: calc(0.5em - 1px);
	  padding-left: calc(0.75em - 1px);
	  padding-right: calc(0.75em - 1px);
	  padding-top: calc(0.5em - 1px);
	  position: relative;
	  vertical-align: top;
	}

	input:focus, input:active {
	  outline: none;
	}

	input[disabled] {
	  cursor: not-allowed;
	}

	input {
	  background-color: white;
	  border-color: #dbdbdb;
	  border-radius: 4px;
	  color: #363636;
	}

	input::-moz-placeholder {
	  color: rgba(54, 54, 54, 0.3);
	}

	input::-webkit-input-placeholder {
	  color: rgba(54, 54, 54, 0.3);
	}

	input:-moz-placeholder {
	  color: rgba(54, 54, 54, 0.3);
	}

	input:-ms-input-placeholder {
	  color: rgba(54, 54, 54, 0.3);
	}

	input:hover {
	  border-color: #b5b5b5;
	}

	input:focus, input:active {
	  border-color: #112c55;
	  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
	}

	input[disabled] {
	  background-color: whitesmoke;
	  border-color: whitesmoke;
	  box-shadow: none;
	  color: #7a7a7a;
	}

	input {
	  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
	  max-width: 100%;
	  width: 100%;
	}


`;

export const Field = styled.div`

	${props => props.isFlexEnd ? "display: flex;align-items: flex-end;" : ""};
	${props => props.isNarrow ? "flex: none !important;" : ""};

	${props => {
		if(props.hasAddons) {
			return `	
		    display: flex;
		    justify-content: flex-start;
				
				${Control}:not(:last-child) {
			    margin-right: -1px;
				}
				${Control}:first-child:not(:only-child) a,
				${Control}:first-child:not(:only-child) button, 
				${Control}:first-child:not(:only-child) input, 
				${Control}:first-child:not(:only-child) select {
			    border-bottom-right-radius: 0;
			    border-top-right-radius: 0;
				}

				${Control}:last-child:not(:only-child) a,
				${Control}:last-child:not(:only-child) button, 
				${Control}:last-child:not(:only-child) input, 
				${Control}:last-child:not(:only-child) select {
			    border-bottom-left-radius: 0;
			    border-top-left-radius: 0;
				}
			`;
		}
	}};

	
	&:not(:last-child) {
	  margin-bottom: 0.75rem;
	}
	@media screen and (min-width: 769px), print {
		display: ${props => props.isHorizontal ? "flex" : ""};
	}

	label {
	  color: #363636;
	  display: block;
	  font-size: 1.2rem;
	  font-weight: 700;
	}
	label:not(:last-child) {
	  margin-bottom: 0.5em;
	}
`;

export const FieldBody = styled.div`
	${Field} ${Field} {
	  margin-bottom: 0;
	}

	@media screen and (min-width: 769px), print {
    display: flex;
    flex-basis: 0;
    flex-grow: 5;
    flex-shrink: 1;
	  
	  ${Field} {
	    margin-bottom: 0;
	  }
	  > ${Field} {
	    flex-shrink: 1;
	  }
	  > ${Field} {
	    ${props => props.isNarrow ? "flex-grow: initial;" : "flex-grow: 1;"};
	  }
	  > ${Field}:not(:last-child) {
	    margin-right: 1.2rem;
	  }
	}
`;

export const SelectBox = styled.div`
	display: inline-block;
  max-width: 100%;
  position: relative;
  vertical-align: top;
  ${props => props.isFullWidth ? '&, select {width: 100%;}' : ''}

	:not(.is-multiple):not(.is-loading)::after {
	  border: 2px solid transparent;
    border-radius: 2px;
    border-right: 0;
    border-top: 0;
    content: " ";
    display: block;
    width: 0.425em;
    height: 0.425em;
    margin-top: -0.3375em;
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: rotate(-45deg);
    transform-origin: center;
	}

	 select {
	  -moz-appearance: none;
	  -webkit-appearance: none;
	  align-items: center;
	  border: 1px solid transparent;
	  border-radius: 4px;
	  box-shadow: none;
	  display: inline-flex;
	  font-size: 1.6rem;
	  height: 2.5em;
	  justify-content: flex-start;
	  line-height: 1.5;
	  padding-bottom: calc(0.5em - 1px);
	  padding-left: calc(0.75em - 1px);
	  padding-right: calc(0.75em - 1px);
	  padding-top: calc(0.5em - 1px);
	  position: relative;
	  vertical-align: top;
	  background-color: white;
	  border-color: #dbdbdb;
	  border-radius: 4px;
	  color: #363636;
	  cursor: pointer;
	  display: block;
	  font-size: 1em;
	  max-width: 100%;
	  outline: none;
	}

	select:focus, select:active {
	  outline: none;
	}

	select::-moz-placeholder {
	  color: rgba(54, 54, 54, 0.3);
	}

	select::-webkit-input-placeholder {
	  color: rgba(54, 54, 54, 0.3);
	}

	select:-moz-placeholder {
	  color: rgba(54, 54, 54, 0.3);
	}

	select:-ms-input-placeholder {
	  color: rgba(54, 54, 54, 0.3);
	}

	select:hover {
	  border-color: #b5b5b5;
	}

	select:focus, select:active {
	  border-color: #112c55;
	  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
	}

	:not(.is-multiple) {
	  height: 2.5em;
	}

	:not(.is-multiple):not(.is-loading)::after {
	  border-color: #112c55;
	  right: 1.125em;
	  z-index: 4;
	}


	@media (max-width: 768px) {
    &.is-fullwidth-mobile,
    &.is-fullwidth-mobile select {
      width: 100% !important;
    }
  }

	select::-ms-expand {
	  display: none;
	}

	select:not([multiple]) {
	  padding-right: 2.5em;
	}

	:not(.is-multiple):not(.is-loading):hover::after {
	  border-color: #363636;
	}
`;