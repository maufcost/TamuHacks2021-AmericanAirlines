import React from "react";

import "./Dashboard.css"
import Logo from "../../assets/logo.png"
import UserProfileImage from "../../assets/user.png"
import Ticket from "../../assets/ticket.png"
import Progress from "../../assets/progress.png"
import ParisIcon from "../../assets/parisicon.png"
import NYIcon from "../../assets/nyicon.png"
import Disney from "../../assets/disneyicon.png"
import AAIcon from "../../assets/aaicon.png"
import BoeingIcon1 from "../../assets/boeingicon1.png"
import BoeingIcon2 from "../../assets/boeingicon2.png"
import R2D2 from "../../assets/r2d2.png"
import Target from "../../assets/target.png"
import StarIcon from "../../assets/staricon.png"

const db = {
	"Paris": {
		destinationAirportAcronym: "CDG",
		destinationCityAirportNameAndCity: "Charlles de Gaulle, Paris",
		destinationArrivalTime: "12:00 PM",
		destinationHasPlusOneTimezone: true
	},
	"New_York": {
		destinationAirportAcronym: "JFK",
		destinationCityAirportNameAndCity: "John F. Kennedy Int. Airport, New York",
		destinationArrivalTime: "9:46 PM",
		destinationHasPlusOneTimezone: false
	},
	"Shanghai": {
		destinationAirportAcronym: "PVG",
		destinationCityAirportNameAndCity: "Shanghai Pudong Int. Airport, Shanghai",
		destinationArrivalTime: "8:00",
		destinationHasPlusOneTimezone: true
	}
}

class Dashboard extends React.Component{

	constructor(props) {
		super(props)

		this.state = {
			selectedDestination: "Paris",
			destinationAirportAcronym: "CDG",
			destinationCityAirportNameAndCity: "Charlles de Gaulle, Paris",
			destinationArrivalTime: "12:00 PM",
			destinationHasPlusOneTimezone: true
		}

		this.handleDestinationChange = this.handleDestinationChange.bind(this)
	}

	handleDestinationChange(event) {
		let newDestination = event.target.value
		let destFormatted = (newDestination === "New York") ? "New_York" : newDestination

		this.setState({
			selectedDestination: newDestination,
			destinationAirportAcronym: db[destFormatted].destinationAirportAcronym,
			destinationCityAirportNameAndCity: db[destFormatted].destinationCityAirportNameAndCity,
			destinationArrivalTime: db[destFormatted].destinationArrivalTime,
			destinationHasPlusOneTimezone: db[destFormatted].destinationHasPlusOneTimezone
		})
	}

	render() {
		return (
			<div>
				{/* Header */}
				<header>
					<img src={Logo} className="logo" alt="company name"/>
					<div>
						<img src={Ticket} className="ticket-icon" alt="Magnifier"/>
						<img src={UserProfileImage} className="user-img" alt="User"/>
					</div>
				</header>

				{/* Simple title */}
				<div className="welcome">
					<h2 className="title">Good morning, <span>Mauricio</span>!</h2>
					<h2 className="subtitle">Are you ready to take off? ☀️🛫</h2>
				</div>

				{/* Flight information */}
				<section className="flight-info">
					<p className="section-title">Your flight</p>

					<main>
						<div className="origin">
							<h3>MCO</h3>
							<p>Orlando</p>
							<span>5:45 PM</span>
						</div>

						<div className="plane-progress">
							<img src={Progress} className="progress" alt="Plane"/>
							<br/>
						</div>

						<div className="destination">
							<h3>{this.state.destinationAirportAcronym}</h3>
							<p>{this.state.destinationCityAirportNameAndCity}</p>
							<span>
								{this.state.destinationArrivalTime}
								{this.state.destinationHasPlusOneTimezone && (
									<sup>+1</sup>
								)}
							</span>
						</div>
					</main>

					<footer>
						<span>Change your destination: </span>
						<select
							value={this.state.selectedDestination}
							onChange={this.handleDestinationChange}
						>
							<option value="Paris">Paris</option>
							<option value="New York">New York</option>
							<option value="Shanghai">Shanghai</option>
							<option value="More">More</option>
						</select>
					</footer>
				</section>

				{/* Destination-specific AR buttons */}
				<section className="destination-specific-experiences">
					<p className="section-title">Arrive at your destination before everyone</p>

					{this.state.selectedDestination === "Paris" && (
						<a className="btn" href="https://go.echoar.xyz/uqWq">
							<div className="icon-space">
								<img src={ParisIcon} alt="Paris"/>
							</div>
							<div className="text-space">
								<div>
									<p>Going to Paris?</p>
									<span>Touch here to see what's waiting for you</span>
								</div>
							</div>
						</a>
					)}

					{this.state.selectedDestination === "New York" && (
						<a className="btn" href="https://go.echoar.xyz/6yCX">
							<div className="icon-space" id="icon-space-ny">
								<img src={NYIcon} alt="Statue of Liberty"/>
							</div>
							<div className="text-space" id="text-space-ny">
								<div>
									<p>Going to New York?</p>
									<span>Touch here to see what's waiting for you</span>
								</div>
							</div>
						</a>
					)}

					{this.state.selectedDestination === "Shanghai" && (
						<a className="btn" href="https://go.echoar.xyz/Qkbm">
							<div className="icon-space" id="icon-space-shanghai">
								<img src={Disney} alt="Disney"/>
							</div>
							<div className="text-space" id="text-space-shanghai">
								<div>
									<p>Going to Shanghai?</p>
									<span>Touch here to see what's waiting for you</span>
								</div>
							</div>
						</a>
					)}

				</section>

				{/* American Airlines sticker */}
				<section className="aa-sticker">
					<p className="section-title">Point your camera to an American Airlines logo</p>
					<a className="btn" href="https://go.echoar.xyz/SZd1">
						<div className="icon-space" id="icon-space">
							<img src={AAIcon} alt="American Airlines Icon"/>
						</div>
						<div className="text-space" id="text-space">
							<div>
								<p>Here's a gift for you!</p>
								<span>Hint: It's in augmented reality</span>
							</div>
						</div>
					</a>
				</section>

				{/* General AR buttons */}
				<section className="general-experiences">
					<p className="section-title">Dive into American Airlines' augmented experiences</p>
					<section className="buttons">

						<a href="https://go.echoar.xyz/6nGR" className="narrow-btn">
							<div className="icon-space">
								<img src={BoeingIcon1} alt="Boeing"/>
							</div>

							<div className="text-space">
								<p>See one of our boeings right next to you. Click on me.</p>
							</div>
						</a>

						<a href="https://go.echoar.xyz/ZdtN" className="narrow-btn">
							<div className="icon-space">
								<img src={Target} alt="Boeing"/>
							</div>

							<div className="text-space">
								<p>Have you ever seen a hornet?</p>
							</div>
						</a>

						<a href="https://go.echoar.xyz/yG2V" className="narrow-btn">
							<div className="icon-space">
								<img src={R2D2} alt="Boeing"/>
							</div>

							<div className="text-space">
								<p>What about coming inside our cockpits?</p>
							</div>
						</a>

						<a href="https://go.echoar.xyz/ddMi" className="narrow-btn">
							<div className="icon-space">
								<img src={BoeingIcon2} alt="Boeing"/>
							</div>

							<div className="text-space">
								<p>Not tired of boeings yet? Check this one out.</p>
							</div>
						</a>
					</section>
				</section>

				<section className="reviews">
					<p className="section-title">See the best spots and their reviews in {this.state.selectedDestination}</p>
					<a href="http://google.com" className="btn">
						<div className="icon-space" id="icon-space">
							<img src={StarIcon} alt="Boeing"/>
						</div>

						<div className="text-space" id="text-space">
							<p>Touch to see reviews and spots in {this.state.selectedDestination} in AR</p>
						</div>
					</a>
				</section>
			</div>
		)
	}
}

export default Dashboard;
