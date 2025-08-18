import React from 'react';
import './about.scss';
import HelloScroller from './HelloScroller';
import { NoRelLink } from './util';

const AboutComponent: React.FC = () => {
	return (
		<div id="about-container">
			<HelloScroller />
			<div id="selfie-and-text">
				<div id="selfie-text">
					<h2>Welcome</h2>
					<p>
						Over my life I have endeavored to bridge the gap between ideas and
						their reality. As a fabricator, designer, volunteer, and software
						engineer, I dive deep to learn the nuances of how people interact
						with the world wherever they connect to it. These key insights teach
						me how to support them with the things we build.
					</p>
					<p>
						My diverse background in engineering, industrial design, and
						community engagement has given me the perspective to build products
						that solve real problems for real people. From one dev of many in a
						company of thousands to a startup's sole IC, I've worked coast to
						coast, from stocks to flowers, in pursuit of creating meaningful
						user experiences. Whether volunteering with homeless outreach groups
						or leading cross-functional product initiatives, I bring consistent
						commitment to understanding what people actually need.
					</p>
				</div>
				<div id="selfie-img" />
			</div>
			<p>
				I bring a wealth of leadership and technical acumen, along with a strong
				passion for creating performant, user-friendly products. My background
				in community engagement, open-source and commercial projects, as well as
				developing features and leading teams, makes me an ideal candidate for a
				plethora of roles and teams.
			</p>
			<h2>Early Life</h2>
			<p>
				Fresh out of highschool in 2011, I was encouraged to pursue a degree in
				engineering. This led me down the college application rabbit hole,
				winding up in Florida at{' '}
				<NoRelLink href="https://erau.edu/">
					Embry-Riddle Aeronautical University (ERAU)
				</NoRelLink>{' '}
				where I pursued a degree in aerospace engineering. My intent was to
				focus on propulsion systems. After 18 months of calculus, I realized we
				would never be friends. Seeking a new direction, I transferred to an
				industrial design program.
			</p>
			<p>
				With the degree change also came a literal degree change. The industrial
				design program I got into was in Chicago at{' '}
				<NoRelLink href="https://www.saic.edu/">
					The School of The Art Institute of Chicago (SAIC)
				</NoRelLink>{' '}
				where I would eventually earn my BFA. While I enjoyed Chicago, when I
				graduated at the end of 2016 I moved to NYC to pursue a larger job
				market.
			</p>
			<h2>New York, 2016</h2>
			<p>
				After two years of traipsing around NYC, not finding the work I wanted,
				I transitioned into software development. After three months of
				self-taught coding to meet the bar of applying, then a grueling two
				months of twelve hour days, six days a week, I completed the AppAcademy
				course in June of 2018. Since then I have been working in front-end web
				development. However, with the post-COVID job market crash and my
				general derision being an engineer in the tech scene, I am looking for
				new career paths, especially in technical leadership.
			</p>
			<h3>COVID, 2020</h3>
			<p>
				I watched with the world as COVID dragged us into hell. Early in January
				I had just started working for the{' '}
				<NoRelLink href="https://www.newyorkfed.org/">
					NYC Federal Reserve
				</NoRelLink>
				, one of the lucky few with a well-paying desk job that became remote.
				By March, New York City became a ghost town. You could land a 747 on
				Broadway in Manhattan and not hit a fly. Shortly into March I was
				serendipitously connected with a California-based group in the midst of
				forming that would soon be called Open Source Medical Supplies.
			</p>
			<h3>Look for the helpers</h3>
			<p>
				Working with{' '}
				<NoRelLink href="https://www.opensourcemedicalsupplies.org/">
					Open Source Medical Supplies (OSMS)
				</NoRelLink>{' '}
				was a particularly profound time in my life. Perhaps it was the shared
				calamity bringing out the best in us, but never before or since have I
				had the chance to work alongside such compassionate, intelligent, and
				resourceful individuals. For my part, I helped develop and build a
				platform that disseminated critical healthcare information during the
				COVID-19 pandemic. This undertaking reinforced for me the importance of
				user-centered design, accessibility, and the role that technology plays
				in supporting communities globally. This type of meaningful work
				inspires me to the kind of projects that improve lives by leveraging
				technology to tackle complex, real-world problems.
			</p>
			<h2>California, 2020</h2>
			<p>
				For many reasons, like the thrill of moving into a new apartment crushed
				by the inexplicable loneliness of COVID, the suffocating
				financially-focused job market of NYC, and the new friends I made
				through OSMS, I left New York in November of 2020. Screaming across the
				country in three days due to last-minute COVID-related scheduling issues
				and making a month-long detour in Los Angeles, I arrived in Oakland by
				Christmas.
			</p>
			<p>
				During my time in the bay I worked for a series of companies struggling
				with and reeling from COVID. While these didn't provide the best working
				environments, I found and created wonderful moments with new friends and
				groups such as Ace Makerspace, Punks With Lunch, and The Flaming Lotus
				Girls.
			</p>
			<h3>Fashionphile</h3>
			<p>
				In my most recent position as a Senior Software Engineer at{' '}
				<NoRelLink href="https://www.fashionphile.com/">Fashionphile</NoRelLink>
				, I led the development of intuitive and responsive user interfaces for
				a high-volume web application, focusing on enhancing the user portal for
				sellers and streamlining reimbursement workflows. Additionally, I worked
				across several teams to prioritize and deliver on complex,
				domain-specific tasks that they lacked, which further honed my ability
				to communicate effectively and collaborate across different skill sets.
			</p>
			<h3>Outreach</h3>
			<p>
				While living in Oakland I made time to engage with my community. Three
				groups I spent time with were{' '}
				<NoRelLink href="https://www.punkswithlunch.org/">
					Punks With Lunch
				</NoRelLink>
				, a homeless outreach group,{' '}
				<NoRelLink href="https://www.acemakerspace.org/">
					Ace Makerspace
				</NoRelLink>
				, a community fabrication space, and{' '}
				<NoRelLink href="https://www.flaminglotus.com/">
					The Flaming Lotus Girls
				</NoRelLink>
				, a female-led art collective focusing on large, fire-shooting, metal
				sculptures.
			</p>
			<h3>PWL</h3>
			<p>
				Working with Punks With Lunch was a brutally rewarding experience. Twice
				a month I would spend the day working with others to travel around West
				Oakland helping those experiencing homelessness, or otherwise
				disaffected, by handing out food and other necessary supplies. We saw
				people, and I say 'people' as the collective whole of humanity and not
				any given group of individuals, at their worst. Some had mental health
				problems, some had drug problems, but many had simply fallen through the
				cracks of a broken system that didn't care to fix itself, let alone
				catch them. We did our exhaustive best, many of the volunteers work in
				social services for their day jobs as well, but it felt like a box of
				bandages on a gaping wound. There's only so much you can do at that
				level; there's only so much you can squeeze out of a person.
			</p>
			<h3>AMT</h3>
			<p>
				Ace Makerspace on the other hand was much more of an active part of any
				given week. I started out managing a small machinist shop as part of the
				larger space. After a year of volunteering my time I was brought on as
				part-time staff to manage a larger chunk I called "Dirty Fab" which
				encompassed the machinist shop, a full woodshop, and the laser cutter
				studio. It was also named in contrast to "Clean Fab" which encapsulated
				2/3D printing and electronics tinkering. My new role encompassed the
				management of the three spaces, a dozen volunteers between them, as well
				as engaging with individuals teaching classes whether for safety or a
				specific project, and supporting the community at large. During my time
				there the spaces were dramatically improved in efficiency, safety, and
				approachability. I developed and oversaw improvement projects such as
				rearranging machinery for process flows, expanding safe working areas
				around various machinery such as table saws, and expanding dust
				collection and monitoring systems to promote healthier working
				environments.
			</p>
			<h3>FLG</h3>
			<p>
				Trying to talk about my time with the Flaming Lotus Girls is one of
				those "you needed to be there" moments; we created art to bring to
				Burning Man; I fell in love with the hottest flame you've ever seen;
				tell me about the genii in a bottle you found and how you had to let it
				go.
			</p>
			<p>
				The first year I was with FLG was also the first year they were back at
				Burning Man, post-COVID. I was put in co-charge of welding together
				hundreds of pounds of steel into 10 by 20-foot origami boat skeletons to
				float in a{' '}
				<NoRelLink href="https://www.flaminglotus.com/sculptures/sea-of-dreams">
					Sea of Dreams.
				</NoRelLink>{' '}
				Months went by. Art emerged from a cacophony of welding sparks,
				grinding, and swearing. You could drain the bay and overflow it with our
				combined blood, sweat, and tears. We went to Burning Man. We set the
				night on fire.
			</p>
			<p>
				The second year with FLG as things started ramping up for the burn, I
				learned my father was diagnosed with Parkinson's. I knew I had to leave
				the bay and help my parents. If I could tear myself in half I would
				have. The choice nearly did. While planning my departure, I volunteered
				/ was elected to lead the efforts for repacking a smaller version of a
				previous year's build,{' '}
				<NoRelLink href="https://www.flaminglotus.com/sculptures/mutopia">
					Mutopia
				</NoRelLink>
				. I labeled everything and packed each bit and bob just so. We packed
				every inch of a 25-foot box truck with steel and care. They left for the
				burn. I kept packing and left a week after they came back.
			</p>
			<h2>Philadelphia, 2024</h2>
			<p>
				I've always enjoyed the cold of the north, but after the bay, it really
				sunk into my bones. What was supposed to be a temporary accommodation of
				living with my parents has stretched into nearly two years of job
				hunting. I've worked some odd-jobs, but I have never gone more than two
				weeks between tech jobs in the past. The post-COVID tech schism has
				certainly affected me. I've kept busy, somehow. Rebuilding my website to
				this iteration is one of the ways. In November, I helped put on a
				production of the{' '}
				<NoRelLink href="https://www.yam-on.com/">Yamatorium</NoRelLink>, an
				experimental, indie-pop group. I've made some new friends here and
				started volunteering with a group called{' '}
				<NoRelLink href="https://phillycommunitywireless.org/">
					Philly Community Wireless
				</NoRelLink>
				, who are actively working on bringing public-access wifi to those most
				in need within Philadelphia.
			</p>
			<h3>2025</h3>
			<p>
				The year started not with a bang, but with a whimper. Who knows what it
				holds?
			</p>
		</div>
	);
};

export default AboutComponent;
