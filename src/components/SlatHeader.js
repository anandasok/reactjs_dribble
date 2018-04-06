import React from 'react';

const SlatHeader = () => {
	return(
		<div className="container">
			<div className="row">
				<div className="col-md-2">

				</div>

				<div className="col-md-8">
					<div className="slat-header">

						<a className="url hoverable" rel="contact" title="Ron Design" href="/RonDesignLab">
							<picture>
								<img className="photo" src="https://cdn.dribbble.com/users/834691/avatars/small/9006fd85d117c7d3bc8a9e949dc01fcb.png?1430481893" />
							</picture>
						</a>
						<h1>Animation Cryptocurrency Marketplace (Light)</h1>

						<h2 className="shot-byline">
							<span className="attribution is-team">
								<span className="shot-byline-user">
									by <a className="url hoverable" rel="contact" href="/RonDesignLab">Ron Design</a>
								</span>
							</span>

							<span className="shot-byline-date">
							  on <a href="/shots?date=2017-11-28">Nov 28, 2017</a>
							</span>
						</h2>

					</div>
				</div>

				<div className="col-md-2">

				</div>
			</div>
		</div>

	)
}

export default SlatHeader;