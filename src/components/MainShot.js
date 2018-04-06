import React from 'react';

const MainShot = (props) => {

	return(
		<div className="main-shot">
			<div className="container">
				<div className="row">
					<div className="col-md-2">

					</div>

					<div className="col-md-8">
						<div className="row">
							<div className="col-md-8">
								<div className="single">
									<div className="single-img">
										<img src="https://cdn.dribbble.com/users/834691/screenshots/3978177/crypto_dashboard.gif" alt="Crypto dashboard" />
									</div>
								</div>


								<div className="screenshot-info-wrapper">
									<div className="shot-desc">
										<p>It’s a platform destined for keeping up-to-date information about all your accounts on other crypto platforms and managing them.</p>

										<p>
											<strong>We're available for new projects</strong> - <br />
											<a href="mailto:ron.e@rondesignlab.com" rel="nofollow noreferrer"></a>
											<a href="mailto:ron.e@rondesignlab.com" rel="noreferrer nofollow">ron.e@rondesignlab.com</a>
										</p>
									</div>
								</div>


								<div id="comments-section">
									<h2 className="count section">
										7 Responses
									</h2>


									<ol id="comments" className="comments">
										{
											props.comments.map((comment, idx) => {
												return <li key={idx} className="response">
													<h2>
														<a className="url hoverable" rel="contact" href="#">
															<img className="photo" src={comment.photo} />
														{comment.name}</a>
													</h2>

													<div className="comment-body">
														<p>{comment.body}</p>
													</div>

												</li>
											})
										}

									</ol>



								</div>
							</div>

							<div className="col-md-4">
								<div className="screenshot-meta">
									<ul className="shot-stats">
										<li>
											<a className="stats-action like-shot" title="Like this shot" href="/signup/new">
												<img src="https://cdn.dribbble.com/assets/icon-shotstat-like-6a1e9e9db48b9b788639f05a658379b7bb027a75d256127f812bf9392664396f.png" alt="Icon shotstat like" />
												<span className="stats-label">Like?</span>
											</a>
											<a className="likes-count stats-num" href="/shots/3978177-Animation-Cryptocurrency-Marketplace-Light/fans">
												279&nbsp;
												<span className="stats-num-label">
												likes
												</span>
											</a>
										</li>

										<li>
											<a className="stats-action share-shot" href="#">
												<img src="https://cdn.dribbble.com/assets/icon-shotstat-share-128ae71c26985fc7325ac5362aba434686f12fdfffa45ed874262a19f923b071.png" alt="Icon shotstat share" />
												<span className="stats-label">Share</span>
											</a>
											<a className="likes-count stats-num" href="#">
												7066&nbsp;
												<span className="stats-num-label">
												views
												</span>
											</a>
										</li>

										<li className="shot-stats-colors">
											<a className="stats-action" href="#">
												<img src="https://cdn.dribbble.com/assets/icon-shotstat-drop-0152bfcbd3cb7ed50e73b830df47c754f061a376a662eac8841ad45316598d97.png" alt="Icon shotstat drop" />
											</a>
											<ul className="color-chips group">
											{
												props.colors.map((color, idx) => {
													<li className="color">
														<a style={{backgroundColor: "#F1F3F8"}} title="#F1F3F8" href="#"></a>
													</li>
												})
											}

												<li className="color">
													<a style={{backgroundColor: "#F1F3F8"}} title="#F1F3F8" href="#"></a>
												</li>
												<li className="color">
													<a style={{backgroundColor: "#DDE2F0"}} title="#DDE2F0" href="#"></a>
												</li>
												<li className="color">
													<a style={{backgroundColor: "#4864F3"}} title="#4864F3" href="#"></a>
												</li>
												<li className="color">
													<a style={{backgroundColor: "#CAE8D4"}} title="#CAE8D4" href="#"></a>
												</li>
												<li className="color">
													<a style={{backgroundColor: "#889FF6"}} title="#889FF6" href="#"></a>
												</li>
												<li className="color">
													<a style={{backgroundColor: "#9199A1"}} title="#9199A1" href="#"></a>
												</li>
											</ul>
										</li>

									</ul>

									<div className="related-player-shots">
										<h3 className="meta-head">
											<a href="#">
												More from Ron Design
											</a>
										</h3>

										<ol className="more-thumbs">
											{
												props.designs.map((design, idx) => {
													console.log(design);
													return <li key={idx}>
														<a href="#">
															<img alt="Img" src={design} />
														</a>
													</li>

												})
											}

										</ol>
									</div>

								</div>
							</div>
						  </div>
					</div>

					<div className="col-md-2">

					</div>
				</div>

			</div>

		</div>
	)
}

export default MainShot;