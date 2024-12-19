<template>
	<div class="dot-map" v-scroll="calcSelected">
		<div class="map__background"></div>
		<div
			class="map__section"
			v-for="(link, index) in links"
			:key="index"
			v-scroll="changeBorder"
		>
			<a
				:class="{'map__link': true, selected: current(index)}"
				:href="link.href"
				v-smooth-scroll="{duration: 1000}"
			>
				{{ link.name }}
			</a>
			<div
				:class="{'map__circle': true, selected: current(index), 'vector--active': true}"
			></div>
			<div class="map__path vector--active" v-if="links[index+1]"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DotMap',
		data() {
			return {
				links: [
					{
						name: 'Home',
						href: '#hero-anchor',
					},
					{
						name: 'Intro',
						href: '#intro-anchor',
					},
					{
						name: 'My Work',
						href: '#portfolio',
					},
					{
						name: 'Contact',
						href: '#contact',
					},
				],
				active: 0,
				selected: 'selected',
			};
		},
		methods: {
			calcSelected() {
				if (window.scrollY < 300) this.active = 0;
				else if (window.scrollY < 900) this.active = 1;
				else if (window.scrollY < 1400) this.active = 2;
				else this.active = 3;
			},
			current(index) {
				return this.active == index ? true : false;
			},
			changeBorder(evt, el) {
				if (window.scrollY > 900) el.id = 'second-color';
				else el.id = '';
			},
		},
	};
</script>

<style>
	.dot-map {
		position: fixed;
		padding: 26.5vh 0.5vw;
		top: 0;
		left: 0;
		z-index: 10;
	}
	.map__background {
		background-color: white;
		position: fixed;
		top: 0;
		left: 0;
		width: 0vw;
		height: 100vh;
		background: white;
		z-index: -5;
		transition: all 0.2s ease;
	}
	.dot-map:hover .map__background {
		width: 10vw;
	}
	.map__section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.section__top {
		display: flex;
	}
	.map__circle {
		width: 0.5vw;
		height: 0.5vw;

		border: 4px solid #ffffff;
		border-radius: 0.5vw;

		transition: all 0.2s ease;
	}
	.map__link {
		position: relative;
		left: 3.5vw;
		height: 0;
		width: 5vw;

		text-align: left;
		font-weight: normal;

		opacity: 0;
		transition: all 0.2s ease;
	}
	.dot-map:hover .map__link {
		opacity: 1;
	}
	.selected {
		background-color: #24a05a;
		font-weight: bold;
	}
	.map__path {
		height: 15vh;
		border: 2px solid white;

		transition: all 0.2s ease;
	}
	.dot-map:hover .vector--active {
		border-color: #24a05a;
	}
	#second-color div {
		border-color: #24a05a;
	}
</style>
