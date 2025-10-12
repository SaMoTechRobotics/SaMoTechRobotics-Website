<script lang="ts">
	export let name: string;

	let img: string = `images/photos/bios/${name}.webp`;
</script>

<div class="wrapper">
	<img src={img} alt="" />
	<div class="content">
		<h1>{name}</h1>
		<!--		<hr />-->
		<!-- Bio descriptions hidden for 2024-2025 year -->
		<!-- <p style="display: visible;">
			<slot />
		</p> -->
	</div>
</div>

<style lang="scss">
	.wrapper {
		padding: 1.5rem;
		background: rgba(0, 0, 0, 0.1);
		border-radius: 1rem;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;

		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;

		&:hover {
			transform: translateY(-5px);
			box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
		}

		img {
			width: 10rem;
			height: 10rem;
			border-radius: 50%;
			object-fit: cover;
			border: 3px solid rgba(255, 255, 255, 0.2);
			transition: border-color 0.2s ease;
		}

		&:hover img {
			border-color: rgba(255, 255, 255, 0.4);
		}

		h1 {
			font-size: 1.5rem;
			margin-top: 1rem;
			margin-bottom: 0;
			color: $text-light;
			font-weight: 600;
		}

		@media (max-width: 768px) {
			padding: 1rem;

			img {
				width: 7rem;
				height: 7rem;
			}

			h1 {
				font-size: 1.2rem;
				margin-top: 0.75rem;
			}
		}
	}
</style>
