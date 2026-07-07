<script lang="ts">
	export let img: string = '';
	export let youtube: string = ''; // YouTube video ID, e.g. "dQw4w9WgXcQ"
	export let title: string;
	export let textSide: 'right' | 'left' = 'right';
	export let dark: boolean = false;
</script>

<div class="wrapper" class:reverse={textSide === 'left'} class:dark>
	<div class="img">
		{#if youtube}
			<div class="video-wrapper">
				<iframe
					src="https://www.youtube.com/embed/{youtube}"
					title={title}
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
		{:else if img}
			<img src={img} alt="" />
		{/if}
	</div>
	<div class="text">
		<h1>{title}</h1>
		<p>
			<slot />
		</p>
		<div class="buttons">
			<slot name="buttons" />
		</div>
	</div>
</div>

<style lang="scss">
	.wrapper {
		height: 100%;

		display: grid;
		grid-template-columns: 0.8fr 1fr;
		grid-template-rows: 1fr;

		margin-top: 1rem;

		background: transparent;

		border-radius: 1rem;
		overflow: hidden;

		padding: 0 $page-padding;

		&.dark {
			color: $text-light;
		}

		@media (min-width: 1000px) {
			&.reverse {
				grid-template-columns: 1fr 1fr;

				> .text {
					order: 1;
				}

				> .img {
					order: 2;
				}
			}
		}

		.img {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;

			img {
				@include image();
			}

			.video-wrapper {
				position: relative;
				width: 100%;
				max-width: 1200px;
				aspect-ratio: 16 / 9;
				border-radius: 1rem;
				overflow: hidden;

				iframe {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
					border: none;
				}
			}
		}

		.text {
			padding: 0 2rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			h1 {
				font-size: 3rem;
				margin-bottom: 1rem;
				text-align: center;
			}

			p {
				margin-left: 1rem;
				font-size: 1.2rem;
				line-height: 1.8rem;
				text-align: left;
			}
		}

		.buttons {
			margin-top: 1rem;
			margin-bottom: 4rem;
			display: flex;
			justify-content: center;
			align-items: center;

			&:empty {
				display: none;
			}
		}

		@media (max-width: 1000px) {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			gap: 0;

			padding: 0 $mobile-padding;

			.text {
				padding: 2rem 0;

				h1 {
					margin-top: 0;
				}

				p {
					margin-left: 0;
					text-align: center;
				}
			}

			.buttons {
				margin-bottom: 1rem;
			}
		}
	}
</style>