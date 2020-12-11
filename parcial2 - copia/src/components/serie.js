import React from 'react';
import {FormattedDate, FormattedMessage, FormattedNumber, FormattedPlural} from 'react-intl';

export default class Serie extends React.Component {

  	render() {
  		return (
  			<tr>
  				<th scope="row">{this.props.offer.id}</th>
      			<td>{this.props.data.name}</td>
  				<td>{this.props.data.company}</td>
		  <td><FormattedNumber value= {this.props.offer.salary}/> <FormattedPlural value={this.props.offer.salary} one={<FormattedMessage id="Million"/>} other={<FormattedMessage id="Millions"/>}/></td>
      			<td>{this.props.offer.city}</td>
			
				<td><FormattedNumber value={this.props.offer.views}/></td>
  			</tr>
  		);
	}
}