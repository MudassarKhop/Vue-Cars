<template>
	<div id="logos">
		<div id="logo" class="imgs border-top border-secondary">
			<img
				src="https://raw.githubusercontent.com/MudassarKhop/car/main/logo%201.png"
				class="rounded float-end"
				width="100"
				height="100"
				alt="..."
			/>
			<img
				src="https://raw.githubusercontent.com/MudassarKhop/car/main/logo%202.png"
				class="rounded float-start"
				width="150"
				height="100"
				alt="..."
			/>
			<img
				src="https://raw.githubusercontent.com/MudassarKhop/car/main/logo%203.png
						"
				class="rounded float-end"
				width="80"
				height="100"
				alt="..."
			/>
			<img
				src="https://raw.githubusercontent.com/MudassarKhop/car/main/logo%204.png"
				class="rounded float-end"
				width="200"
				height="100"
				alt="..."
			/>
			<img
				src="https://raw.githubusercontent.com/MudassarKhop/car/main/logo5.png"
				class="rounded float-end"
				width="200"
				height="100"
				alt="..."
			/>
			<img
				src="https://raw.githubusercontent.com/MudassarKhop/car/main/logo%206.png"
				class="rounded float-end"
				width="200"
				height="100"
				alt="..."
			/>
			<img
				src="https://raw.githubusercontent.com/MudassarKhop/car/main/logo%207.png"
				class="rounded float-end"
				width="200"
				height="100"
				alt="..."
			/>
			<img
				src="https://raw.githubusercontent.com/MudassarKhop/car/main/logo%208.png"
				class="rounded float-end"
				width="200"
				height="100"
				alt="..."
			/>
			<img
				src="https://raw.githubusercontent.com/MudassarKhop/car/main/logo%209.png"
				class="rounded float-end"
				width="200"
				height="100"
				alt="..."
			/>
		</div>
		<div id="details">
			<div id="footer1" class="card w-100">
				<div class="card-body">
					<h2>Discover</h2>
					<p><i class="fa-solid fa-chevron-right"></i> Italy</p>
					<p><i class="fa-solid fa-chevron-right"></i> France</p>
					<p><i class="fa-solid fa-chevron-right"></i> Miami</p>
					<p><i class="fa-solid fa-chevron-right"></i> Cape Town</p>
					<p><i class="fa-solid fa-chevron-right"></i> Lagos</p>
				</div>
				<div class="card-body">
					<h2>Contact Us</h2>
					<p>
						<i class="fa-solid fa-location-dot"></i> 774 NE 84th St Miami, FL
						33879
					</p>
					<p><i class="fa-solid fa-phone"></i> 987 654 9875</p>
					<p><i class="fa-solid fa-fax"></i> 987 654 9786</p>
					<p><i class="fa-regular fa-envelope"></i> auto@mudahaus.com</p>
					<p><i class="fa-solid fa-address-book"></i> Manager: James Conor</p>
				</div>
				<div class="card-body">
					<h2>Newsletter</h2>
					<p>Join our newsletter to catch our great deals.</p>
					<div class="input-group mb-3">
						<span class="input-group-text" id="basic-addon1">@</span>
						<input
							type="text"
							class="form-control"
							placeholder="Email"
							aria-label="Email"
							aria-describedby="basic-addon1"
						/>
					</div>

					<p>Muda Autohaus® is a premium luxury automobile dealership.</p>
					<p id="missing">.</p>
				</div>
			</div>
		</div>
		<div id="details2">
			<div id="footer2" class="card w-100 py-5">
				<p id="nav-foot2">©Muda Autohaus-All Rights Reserved</p>
				<p class="text-center">
					<a id="nav-foot" class="navbar-brand text-center" href="#"
						><i class="fa-solid fa-bolt"></i>Muda Autohaus</a
					>
				</p>
				<p id="nav-foot3">
					<a href="#"><i class="fa-brands fa-instagram"></i></a>
					<a href="#"><i class="fa-brands fa-facebook-f"></i></a>
					<a href="#"><i class="fa-solid fa-at"></i></a>
					<a href="#"><i class="fa-brands fa-twitter"></i></a>
					<a href="#"><i class="fa-brands fa-whatsapp"></i></a>
				</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: ["foot"],
	};
</script>
<style>
	#footer {
		padding-top: 5%;
		height: 60vh;
		background-color: white;
	}
	#logo {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
	}
	#footer1 {
		padding-top: 0%;
		padding: 8%;
		height: 50vh;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		margin-left: auto;
		margin-right: auto;
		background: #a4d236;
	}
	#footer2 {
		height: 10vh;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		margin-bottom: -5%;
		margin-left: auto;
		margin-right: auto;
		background: #6e8c27;
	}
	h2 {
		font-family: "Racing Sans One", cursive;
		text-shadow: 1px 1px 2px rgb(255, 255, 255);
	}
	h5 {
		font-family: "Racing Sans One", cursive;
		text-shadow: 1px 1px 2px rgb(255, 255, 255);
	}
	#missing {
		padding-bottom: 5%;
	}
	option {
		font-family: "Racing Sans One", cursive;
	}
</style>
