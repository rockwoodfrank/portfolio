<template>
	<nav>
		<!--TODO <a>Asteroids</a>-->
		<a class="nav__link" href="#hero">Home</a>
		<a class="nav__link" href="#intro">About Me</a>
		<a class="nav__link" href="#portfolio">My Work</a>
		<a class="nav__link" href="#contact">Contact</a>
		<slot>
		</slot>
	</nav>
</template>

<script>
	export default {
		name: 'NavBar',
	};
</script>

<style scoped>
	nav {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
	}
	.nav__link {
		text-decoration: none;
		color: #121e28;
		padding-right: 3rem;
		font-weight: normal;
	}
</style>
