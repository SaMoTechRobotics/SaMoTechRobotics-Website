<div class="wrapper">
	<h1>Accomplishments</h1>
	<div class="grid">
		<div class="split">
			<h1>Competition</h1>
			<slot name="competition" />
		</div>
		<div class="split">
			<h1>Outreach</h1>
			<slot name="outreach" />
		</div>
	</div>
</div>

<style lang="scss">
  .wrapper {
    color: $text-light;

    padding: 0 $page-padding 2rem;

    h1 {
      font-size: 3rem;
      text-align: center;
      margin-bottom: 0;

      @media (max-width: 810px) {
        font-size: 2rem;
      }
    }

    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      gap: 2rem;

      @media (max-width: 810px) {
        grid-template-columns: 1fr;
      }

      .split {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;


        h1 {
          font-size: 2rem;
          margin-bottom: 0;
        }

        :global(li) {
          font-size: 1.2rem;
          margin: 1rem 0;
          text-align: left;
        }
      }
    }
  }
</style>