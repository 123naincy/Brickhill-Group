import { Container, Row, Col } from "react-bootstrap";
// HEADER / COVER
import FirstPage from "../../assets/newsletter/first-page.png";
import logo from "../../assets/newsletter/go-boundary-logo.png";

// WORLD SECTION
import CrudeOil from "../../assets/newsletter/newsletter-second-image.png";
import summit from "../../assets/newsletter/summit.png";
import minister from "../../assets/newsletter/minister.png";
import manufacturing from "../../assets/newsletter/manufacturing-leads.png";
import supplyChain from "../../assets/newsletter/supply-chain-initiative.png";

// REAL ESTATE
import infrastructure from "../../assets/newsletter/infrastructure.jpg";
import directorDesk from "../../assets/newsletter/director-desk.jpg";
import england from "../../assets/newsletter/england.jpg"
// EDUCATION
import educationBudget from "../../assets/newsletter/education-budget.jpg";
import school from "../../assets/newsletter/school.jpg";
import student from "../../assets/newsletter/student.jpg";

// TECHNOLOGY
import micron from "../../assets/newsletter/micron.jpg";
import robotDog from "../../assets/newsletter/robot-dog.jpg";

// SPORTS
import hockey from "../../assets/newsletter/hockey.jpg";
import marathon from "../../assets/newsletter/marathon.jpg";
import openingWeeks from "../../assets/newsletter/opening-weeks.jpg";

// SOCIAL MEDIA / TRENDING
import pmCares from "../../assets/newsletter/pm-cares.jpg";
import delhiBoy from "../../assets/newsletter/delhi-boy.jpg";
import bombMaking from "../../assets/newsletter/bomb-making.jpg";
import slapCollapse from "../../assets/newsletter/slap-collapse.jpg";
import aaganwadiCook from "../../assets/newsletter/aaganwadi-cook.jpg";
import tataPlay from "../../assets/newsletter/tata-play.jpg";

// ENTERTAINMENT
import priyankaChopra from "../../assets/newsletter/priyanka-chopra.jpg";
import keralaStory from "../../assets/newsletter/kerla-story-2.jpg";
import noVulgarSong from "../../assets/newsletter/no-vulger-song.jpg";

// BUSINESS
import adaniGroup from "../../assets/newsletter/adani-group.jpg";
export default function NewsletterDetailPage() {
    return (
        <>
            <Container className="newsletter-container">
                {/* First Full Page Image */}
                <img
                    src={FirstPage}
                    alt="newsletter image"
                    className="newsletter-image img-fluid mb-4"
                />
                {/* ================= HEADER ================= */}
                <Row className="align-items-center text-center border-bottom border-dark pb-3 mb-4">

                    {/* LEFT LOGO */}
                    <Col md={3} className="text-md-start text-center">
                        <img src={logo} alt="Go Boundary Logo" className="logo" />
                    </Col>

                    {/* CENTER TITLE */}
                    <Col md={9}>
                        <h1 className="fw-bold newsletter-title mb-1">
                            NEWS LETTER
                        </h1>

                        <div className="d-flex justify-content-between small">
                            <span>February 2026</span>
                            <span>Volume 134</span>
                        </div>
                    </Col>

                </Row>

                {/* ================= FIRST BANNER ================= */}
                <div className="main-banner">
                    <img
                        src={CrudeOil}
                        alt="Crude Oil"
                        className="img-fluid mb-3"
                    />
                </div>

                <div className="article-block">
                    <h2 className="fw-bold">Oil Jumps on U.S. Iran Escalation Fears</h2>
                    <p>
                        Oil prices moved sharply higher this week as markets priced in rising U.S. Iran tensions and the risk of disruption in the Strait of Hormuz, one of the world's most critical oil chokepoints. In recent trading, crude posted
                        one of its strongest short bursts in months, with traders reacting to headlines around military and diplomatic
                        moves, as well as the fragile state of negotiations. Beyond the immediate price spike, the bigger story is how
                        quickly geopolitics re-enters inflation math. Even if supply is not disrupted, the risk premium can lift fuel costs
                        and shipping rates. For importers across Asia, that can pressure trade balances and feed into domestic inflation, complicating central bank decisions. For India, sensitivity is two-fold. Higher crude directly raises the
                        current account burden and can tighten fiscal room for subsidies. It can also add volatility to interest-rate expectations and the rupee.
                    </p>
                </div>

                {/* ================= SECOND ARTICLE ================= */}
                <div className="main-banner">
                    <img
                        src={summit}
                        alt="Europe Summit"
                        className="img-fluid mb-3"
                    />
                </div>

                <div className="article-block">
                    <h2>
                        Europe Says Russia Shows No Tangible Signs Toward Peace in Ukraine
                    </h2>
                    <p>
                        Oil prices moved sharply higher this week as markets priced in rising U.S. Iran tensions and the risk of disruption in the Strait of Hormuz, one of the world's most critical oil chokepoints. In recent trading, crude posted
                        one of its strongest short bursts in months, with traders reacting to headlines around military and diplomatic
                        moves, as well as the fragile state of negotiations. Beyond the immediate price spike, the bigger story is how
                        quickly geopolitics re-enters inflation math. Even if supply is not disrupted, the risk premium can lift fuel costs
                        and shipping rates. For importers across Asia, that can pressure trade balances and feed into domestic inflation, complicating central bank decisions. For India, sensitivity is two-fold. Higher crude directly raises the
                        current account burden and can tighten fiscal room for subsidies. It can also add volatility to interest-rate expectations and the rupee.
                    </p>
                </div>

                {/* ================= WORLD 2.0 SECTION ================= */}
                <h2 className="section-heading text-center border-top border-bottom border-dark py-2 my-5">
                    WORLD 2.0
                </h2>
                <div className="main-banner">
                    <img
                        src={minister}
                        alt="Europe Summit"
                        className="img-fluid mb-3"
                    />
                </div>
                <div className="article-block">
                    <h2>
                        Union Budget 2026 27 Highlights: Manufacturing and Biopharma Push
                    </h2>
                    <p>
                        The Union Budget 2026 27 has placed manufacturing scaling at the center, including focus areas
                        framed as strategic sectors. A notable announcement is Biopharma SHAKTI, backed by а
                        multi-year outlay aimed at strengthening India as a global biopharma manufacturing hub. The
                        broader pattern is that government is framing
                        sector policy as export competitiveness strategy.
                        Biopharma and advanced manufacturing are
                        chosen not only for domestic needs, but also because supply chains in these sectors are being reorganized globally for resilience. For industry
                        leaders, the opportunity is in aligning with regulated-market standards, clinical-grade manufacturing requirements, and global audit readiness. For
                        startups and mid-sized firms, the constraint is
                        access to capital and specialist talent. Investor
                        confidence will be driven by how quickly projects
                        translate into capacity and exports.
                    </p>
                </div>
                <div className="main-banner">
                    <img
                        src={manufacturing}
                        alt="Europe Summit"
                        className="img-fluid mb-3"
                    />
                </div>
                <div className="article-block">
                    <h2>
                        India's Private Sector Growth Strengthens; Manufacturing Leads
                    </h2>
                    <p>
                        India's private sector activity accelerated in February, supported by a strong manufacturing pickup and
                        steady services performance. The flash composite
                        PMI rose to a three month high, while manufacturing
                        output improved meaningfully, supported by new
                        orders and resilient demand. This is strategically important because it suggests the industrial cycle is not
                        only driven by government capex, but also by broader order pipelines. Faster hiring and improved business confidence indicate firms are investing into саpacity and delivery. Inflation pressures have also
                        picked up, particularly in input costs, which can
                        squeeze margins in price-sensitive segments.
                    </p>
                </div>
                <div className="main-banner">
                    <img
                        src={supplyChain}
                        alt="Europe Summit"
                        className="img-fluid mb-3"
                    />
                </div>
                <div className="article-block">
                    <h2>
                        India Joins U.S. Led Pax Silica Tech Supply Chain Initiative
                    </h2>
                    <p>
                        India has joined the U.S. led Pax Silica initiative, a partnership focused on secure technology
                        supply chains spanning semiconductors, critical
                        technologies, and advanced manufacturing. The
                        announcement signals deeper alignment on technology resilience among participating nations.
                        Supply chains are now governed by trust frameworks, not only cost curves. Being part of a trusted ecosystem can influence where fabs, packaging plants, and component ecosystems expand. It
                        also affects procurement preferences for government and defence linked contracts. For India, this
                        can translate into stronger technology investment
                        pipelines, but also higher expectations around IP
                        protection, export controls compliance,
                        and cybersecurity standards. The commercial upside is
                        large. The governance bar will rise in parallel.
                    </p>
                </div>
                {/* education */}
                <h2 className="section-heading text-center border-top border-bottom border-dark py-2 my-5">
                    EDUCATION
                </h2>
                <div className="main-banner">
                    <img
                        src={educationBudget}
                        alt="Europe Summit"
                        className="img-fluid mb-3"
                    />
                </div>
                <div className="article-block">
                    <h2>
                        Budget Signals Stronger Link Between Education, Skilling, and Jobs
                    </h2>
                    <p>
                        The latest budget-era sector analysis signals a stronger policy push toward measurable employability outcomes, particularly in high-growth domains such as
                        artificial intelligence, industry-linked training, and
                        modern service sectors. The emphasis reflects a strategic shift from broad education expansion to outcome-based skill development aligned with labour
                        market demand. Experts say the move is timely. While
                        India continues to benefit from a demographic advantage, skill mismatch remains a persistent constraint
                        across industries. Many sectors report difficulty in
                        hiring job-ready talent despite large numbers of graduates entering the workforce each year. The renewed
                        focus creates opportunities for companies to design
                        apprenticeship programs, co-develop certifications
                        with educational institutions, and build micro-credential pathways tailored to specific industry needs.
                    </p>
                </div>
                <div className="main-banner">
                    <img
                        src={student}
                        alt="Students Walkout"
                        className="img-fluid mb-3"
                    />
                </div>
                <div className="article-block">
                    <h2>
                        Students Stage Walkout to Protest Immigration Enforcement Policies

                    </h2>
                    <p>
                        Hundreds of students walked out of their classrooms
                        this week to protest actions by U.S. Immigration and
                        Customs Enforcement (ICE), voicing frustration over
                        what they describe as harsh and unfair immigration
                        enforcement practices. Gathering outside their campuses with handmade signs and chants, the students said the demonstration was not about skipping
                        school but about standing up for their communities.
                        Many shared emotional accounts of friends and relatives living in fear of detention or deportation. Some
                        spoke about classmates who abruptly stopped attending school after family members were taken into
                        custody. For the protesters, the issue goes beyond
                        politics. "We're going to continue to fight. Something
                        adults should've been doing all along," one student
                        said, echoing a sentiment heard repeatedly throughout the rally. For those involved, remaining silent is
                        no longer an option.
                    </p>
                </div>
                <div className="main-banner">
                    <img
                        src={school}
                        alt="Europe Summit"
                        className="img-fluid mb-3"
                    />
                </div>
                <div className="article-block">
                    <h2>
                        Schools Organise Career Counselling Drives to Guide Students Future Choices
                    </h2>
                    <p>
                        Schools and education bodies across the country
                        have recently organised dedicated career counselling
                        drives to help students make informed academic and
                        professional decisions. The initiative aims to support
                        students at a crucial stage when selecting streams
                        after secondary school. Choosing between Science,
                        Commerce, and Arts, along with emerging fields such
                        as design, data science, and digital media, can often
                        feel overwhelming. Through structured sessions,
                        trained counsellors interacted with students to assess
                        their interests, strengths, and long-term aspirations.
                        The focus was on personalised guidance rather than
                        steering students toward conventional or socially popular options. The drives included one-on-one counselling sessions, aptitude assessments, and interactive workshops. Beyond academics, students were
                        encouraged to explore extracurricular activities and
                        personal development opportunities.
                    </p>
                </div>
                {/* sports*/}
                <h2 className="section-heading text-center border-top border-bottom border-dark py-2 my-5">
                    SPORTS
                </h2>
                <div className="main-banner">
                    <img
                        src={hockey}
                        alt="Europe Summit"
                        className="img-fluid mb-3"
                    />
                </div>
                <div className="article-block">
                    <h2>
                        Pakistan Hockey in Crisis as PHF President Resigns After Australia Tour Row
                    </h2>
                    <p>
                        Pakistan's hockey administration has plunged into fresh
                        turmoil after a controversial tour of Australia reportedly
                        left national players stranded due to alleged mismanagement. The fallout has led to the resignation of Tariq Bugti,
                        president of the Pakistan Hockey Federation (PHF), intensifying concerns over the sport's declining state in the
                        country. Reports claim members of the national team
                        faced accommodation and financial difficulties during the
                        overseas tour, with allegations that some players were
                        left without proper arrangements. The incident triggered
                        widespread outrage among fans and former players, who
                        questioned how a national side could face such embarrassment abroad. Amid mounting criticism, Bugti stepped
                        down on Thursday. However, shortly before resigning, he
                        imposed a controversial two-year ban on national team
                        captain Ammad Shakeel Butt.
                    </p>
                </div>
                <div className="main-banner">
                    <img
                        src={openingWeeks}
                        alt="Students Walkout"
                        className="img-fluid mb-3"
                    />
                </div>
                <div className="article-block">
                    <h2>
                        ISL Opening Weekend Delivers Goals,
                        Drama and Familiar Heroes

                    </h2>
                    <p>
                        The opening weekend of the Indian Super League (ISL)
                        delivered everything fans had hoped for goals, drama,
                        and standout performances that have already set the
                        tone for the season. One of the biggest talking points
                        was the balance on display in the Kolkata derby between Mohun Bagan Super Giant and East Bengal FC.
                        Traditionally fueled by emotion and history, the rivalry
                        this time also looked evenly matched on the pitch. Both
                        teams displayed tactical discipline and attacking intent,
                        hinting at a fiercely competitive season ahead. Jamie
                        Maclaren quickly reminded everyone of his pedigree.
                        The striker's intelligent movement, perfectly timed runs,
                        and composed finishing were classic hallmarks of his
                        game sharp, efficient, and clinical in front of goal. If this
                        weekend is any indication, the ISL season promises
                        thrilling storylines and sustained excitement.
                    </p>
                </div>
                <div className="main-banner">
                    <img
                        src={marathon}
                        alt="Europe Summit"
                        className="img-fluid mb-3"
                    />
                </div>
                <div className="article-block">
                    <h2>
                        New Delhi Marathon 2026 to Serve as
                        Asian Games Qualifier
                    </h2>
                    <p>
                        The 11th edition of the New Delhi Marathon will flag off
                        from the iconic Jawaharlal Nehru Stadium on Sunday,
                        bringing together elite athletes and thousands of running
                        enthusiasts from across the country. Recognised by the
                        Athletics Federation of India (AFI) as India's national
                        marathon, the race is also a certified World Athletics
                        event. This year's marathon carries added significance
                        as it serves as a qualifying event for the Asian Games
                        2026 in Aichi-Nagoya, Japan. Athletes will be chasing
                        the qualification standards of 2:15:04 for men and
                        2:31:52 for women. Among the headline contenders are
                        defending champion Man Singh, who clocked 2:15:24
                        last year, Olympian Gopi T, and women's defending
                        champion Bhagirathi Bisht, who won in 2:48:59. India's
                        long-standing national records 2:12:00 by Shivnath
                        Singh (1978) and 2:34:43 by OP Jaisha (2015) remain
                        benchmarks for the country's distance runners.
                    </p>
                </div>
                {/* TECHNOLOGY*/}
                <h2 className="section-heading text-center border-top border-bottom border-dark py-2 my-5">
                    TECHNOLOGY
                </h2>
                <div className="main-banner">
                    <img
                        src={micron}
                        alt="Europe Summit"
                        className="img-fluid mb-3"
                    />
                </div>
                <div className="article-block">
                    <h2>
                        Micron Expands India Footprint With
                        Gujarat Semiconductor Facility
                    </h2>
                    <p>
                        Micron has detailed a major investment in Gujarat for a
                        semiconductor facility focused on memory assembly
                        and testing. This back end capacity is a meaningful
                        early step for India because it builds workforce and operational credibility while creating a supplier ecosystem. The logic is clear: global chip companies want diversified, trusted production networks. Assembly and
                        testing can scale faster and can be a stepping stone
                        toward higher value operations. For India, the benefit
                        is not only jobs. It is integration into global production
                        schedules where reliability matters. Follow-on investments often arrive once a location proves dependable.
                        Execution risks include customs flow, power quality,
                        vendor readiness, and skill depth. Managing these well
                        is the difference between announcement and durable
                        capacity. </p>

                </div>
                <div className="main-banner">
                    <img
                        src={robotDog}
                        alt="Students Walkout"
                        className="img-fluid mb-3"
                    />
                </div>
                <div className="article-block">
                    <h2>
                        Galgotias Clarifies Stand on Prof. Neha
                        Singh After Robo Dog Row

                    </h2>
                    <p>
                        Amid the controversy at the India Al Impact Summit
                        2026 over a Chinese robotic dog displayed at its stall,
                        Galgotias University issued a clarification regarding
                        Assistant Professor Neha Singh. The university stated
                        that Neha Singh has not been suspended following the
                        incident. It described her as an "ill-informed representative" who was not fully aware of the robot's technical
                        origin when interacting with media personnel at the
                        event. According to the institution, she was not officially authorised to address the press on behalf of the university and her remarks were made in enthusiasm
                        during on-camera interactions. The controversy began
                        after a robotic dog showcased at the university's stall
                        was identified as the Unitree Go2, a commercially
                        available robot developed by China-based Unitree Robotics.
                    </p>
                </div>
                <div className="main-banner">
                    <img
                        src={adaniGroup}
                        alt="Europe Summit"
                        className="img-fluid mb-3"
                    />
                </div>
                <div className="article-block">
                    <h2>
                        Adani Group to Invest $100 Billion in
                        Renewable-Powered AI Data Centres

                    </h2>
                    <p>
                        Adani Group has announced plans to invest $100 billion by 2035 to build renewable energy-powered,
                        Al-ready data centres across India, positioning itself at
                        the heart of the country's fast-growing artificial intelligence infrastructure push. In a statement released
                        Tuesday, flagship arm Adani Enterprises said the investment is expected to catalyse an additional $150 billion across allied sectors, including server manufacturing, advanced electrical infrastructure, and supporting
                        technologies. Together, this could help create a $250
                        billion Al infrastructure ecosystem in India over the next
                        decade. The move comes as India aggressively markets itself as a global Al infrastructure hub. Several
                        global and domestic giants including Google, Amazon,
                        and Reliance Industries have already pledged multi-billion-dollar investments in Indian data centres.
                    </p>
                </div>
                {/* Trending on Social-Media
*/}
                <h2 className="section-heading text-center border-top border-bottom border-dark py-2 my-5">
                    Trending on Social-Media
                </h2>
                <div className="main-banner">
                    <img
                        src={pmCares}
                        alt="Europe Summit"
                        className="img-fluid mb-3"
                    />
                </div>
                <div className="article-block">
                    <p>
                        The Prime Minister's Office (PMO) has clarified that the PM
                        CARES Fund is a private charitable trust and not a government fund. It stated that the corpus consists entirely of voluntary contributions from individuals and organisations, with
                        no money drawn from the Consolidated Fund of India or the
                        Union Budget. The PMO emphasized that PM CARES operates independently of the government's financial framework
                        and is used for emergency and disaster relief purposes, including crises like the COVID-19 pandemic.</p>

                </div>
                <div className="main-banner">
                    <img
                        src={delhiBoy}
                        alt="Students Walkout"
                        className="img-fluid mb-3"
                    />
                </div>
                <div className="article-block">
                    <p>
                        A teenage boy in Delhi died after falling into an uncovered
                        20-foot-deep pit in his locality. The incident reportedly occurred when he accidentally slipped into the excavation site,
                        which residents claim lacked proper barricading or warning
                        signs. Locals alerted authorities, but the boy could not be
                        saved despite rescue efforts. The tragedy has sparked outrage in the area, with demands for accountability. Police
                        have registered a case and launched an investigation into
                        possible negligence.
                    </p>
                </div>
                <div className="main-banner">
                    <img
                        src={slapCollapse}
                        alt="Europe Summit"
                        className="img-fluid mb-3"
                    />
                </div>
                <div className="article-block">
                    <p>
                        Slab Collapse on Mumbai Metro Line-4 Kills One, Injures
                        Three: A concrete parapet slab from the under-construction
                        Mumbai Metropolitan Region Development Authority's
                        Metro Line 4 collapsed in Mulund West, Mumbai, killing one
                        person and injuring three others. The slab fell onto vehicles
                        on LBS Marg, crushing an auto-rickshaw. Authorities arrested five individuals linked to the contractor and imposed
                        heavy fines for safety lapses. A probe has been ordered,
                        and safety audits across metro sites have been intensified.

                    </p>
                </div>
                <div className="main-banner">
                    <img
                        src={tataPlay}
                        alt="Europe Summit"
                        className="img-fluid mb-3"
                    />
                </div>
                <div className="article-block">
                    <p>
                        TATA AIA Life Insurance has launched a widespread outdoor campaign titled "Protecting People of Chennai," displaying multiple billboards across Chennai and other major
                        Indian cities. The campaign promotes life insurance awareness and financial protection for families, using strong
                        visual messaging to reinforce trust and security. By localising its communication while maintaining a nationwide presence, the company aims to strengthen regional engagement and expand its footprint in India's competitive insurance market.
                    </p>
                </div>
                <div className="main-banner">
                    <img
                        src={bombMaking}
                        alt="Europe Summit"
                        className="img-fluid mb-3"
                    />
                </div>
                <div className="article-block">
                    <p>
                        A suspected bomb-making attempt failed on a rooftop in
                        Odisha, triggering an explosion that created panic in the
                        area. The blast reportedly occurred while crude explosive
                        materials were being assembled, leaving at least one
                        person injured. Police and forensic teams reached the spot
                        and secured the site. Authorities have launched an investigation to determine the motive and origin of the materials.
                        Security has been tightened, and officials have promised
                        strict action against those responsible.

                    </p>
                </div>
                <div className="main-banner">
                    <img
                        src={aaganwadiCook}
                        alt="Europe Summit"
                        className="img-fluid mb-3"
                    />
                </div>
                <div className="article-block">
                    <p>
                        An anganwadi cook tragically lost her life while saving
                        nearly 20 specially-abled children from a deadly bee attack.
                        The incident occurred when a swarm of bees suddenly descended on the centre, causing panic among the children.
                        Showing remarkable courage, the cook rushed to shield and
                        evacuate them to safety. While the children were rescued
                        without serious harm, she sustained severe stings and later
                        succumbed. The heartbreaking incident has drawn widespread tributes for her bravery and selfless sacrifice.
                    </p>
                </div>
                {/* ENTERTAINMENT */}
                <h2 className="section-heading text-center border-top border-bottom border-dark py-2 my-5">
                    ENTERTAINMENT
                </h2>
                <div className="main-banner">
                    <img
                        src={noVulgarSong}
                        alt="Europe Summit"
                        className="img-fluid mb-3"
                    />
                </div>

                <div className="article-block">
                    <h2>
                        Bihar Bans Vulgar and Double-Meaning Songs in Public Spaces
                    </h2>
                    <p>
                        The Bihar government has announced a ban on the public playing of vulgar and double-meaning songs
                        across the state. The move aims to curb the use of explicit lyrics at public events, festivals, weddings, and
                        on loudspeakers in marketplaces. Officials said the decision was taken following complaints from citizens
                        about obscene Bhojpuri and other regional songs being played openly, often in the presence of women and
                        children. Authorities have directed local administrations and police to strictly enforce the order and take
                        action against violators. Under the new directive, organisers of public functions must ensure that songs
                        played at events adhere to decency standards. Police have been empowered to stop performances and seize
                        sound equipment if necessary. The decision has sparked mixed reactions. While some residents have welcomed the move as a step toward maintaining social decorum, others argue it may lead to subjective enforcement and concerns over artistic freedom.

                    </p>
                </div>
                <div className="main-banner">
                    <img
                        src={priyankaChopra}
                        alt="Europe Summit"
                        className="img-fluid mb-3"
                    />
                </div>

                <div className="article-block">
                    <h2>
                        Priyanka Chopra Shines at 'The Bluff'
                        Premiere with Nick Jonas Support

                    </h2>
                    <p>
                        Bollywood-born global star Priyanka Chopra turned
                        heads at the world premiere of her latest film The
                        Bluff, wearing a striking custom gown inspired by
                        "Bloody Mary armour." Accompanied by husband
                        Nick Jonas, Chopra walked the red carpet with confidence, marking another milestone in her international career. Fans and fashion critics alike praised
                        her bold styling choice, a fusion of avant-garde
                        design and cinematic flair that perfectly matched the
                        film's edgy tone. Social media buzzed with photographs and reactions, with many applauding her
                        evolution as an actress and fashion icon on the
                        global stage. The Bluff is anticipated to be a standout release this year, exploring intense themes and
                        showcasing Chopra's dramatic range.

                    </p>
                </div>
                <div className="main-banner">
                    <img
                        src={keralaStory}
                        alt="Europe Summit"
                        className="img-fluid mb-3"
                    />
                </div>

                <div className="article-block">
                    <h2>
                        'The Kerala Story 2' Faces Troubles
                        Amid Controversy
                    </h2>
                    <p>
                        The upcoming film The Kerala Story 2 has sparked
                        significant controversy, dominating headlines across
                        Bollywood and social media. Following the massive
                        impact of its predecessor, the sequel faced pushback
                        from critics and civic groups citing concerns over narrative choices, portrayal of communities, and broader
                        cultural sensitivities. Industry analysts note the clash
                        has reignited debates around creative freedom, censorship, and responsible storytelling in Indian cinema.
                        Supporters of the film argue that artistic expression
                        should not be curtailed, while detractors call for greater accountability in the portrayal of sensitive socio-political issues. Amid the uproar, several trade insiders
                        are closely watching how distribution, box-office performance, and audience reception will be affected.
                    </p>
                </div>
                {/* Real Estate */}
                <h2 className="section-heading text-center border-top border-bottom border-dark py-2 my-5">
                    REAL-ESTATE
                </h2>
                <div className="main-banner">
                    <img
                        src={infrastructure}
                        alt="Europe Summit"
                        className="img-fluid mb-3"
                    />
                </div>

                <div className="article-block">
                    <h2>
                        Maharashtra Clears Land Acquisition for Key Expressway Corridor
                    </h2>
                    <p>
                        The Maharashtra government has approved significant funding for land acquisition tied to a new access-controlled expressway corridor, signalling momentum for one of the state's key infrastructure pushes. The project
                        aims to strengthen regional connectivity, lower logistics costs, and unlock development in under-served districts. Land acquisition is often the biggest bottleneck in large infrastructure projects. Clear financial approvals
                        and budgetary backing are expected to accelerate execution timelines and boost contractor confidence. With
                        funding clarity in place, authorities believe groundwork and tendering processes can move faster. Beyond
                        faster travel, expressways typically trigger strong secondary economic effects. These include the emergence of
                        industrial nodes, warehousing hubs, logistics parks, and expansion of service ecosystems along the corridor.
                        Land values and real estate activity in adjoining areas also tend to see upward movement. Timeline slippages,
                        legal disputes over land, and cost escalation could affect project viability if not managed efficiently.

                    </p>
                </div>
                <div className="main-banner">
                    <img
                        src={england}
                        alt="Europe Summit"
                        className="img-fluid mb-3"
                    />
                </div>

                <div className="article-block">
                    <h2>
                        Bank of England Holds Rate at 3.75%,
                        Signals Cautious Outlook
                    </h2>
                    <p>
                        The Bank of England has kept its policy rate unchanged at
                        3.75 percent, reinforcing a "wait-and-watch" approach as inflation and growth trends continue to evolve. While the decіsion was widely expected, markets are closely analysing the
                        tone of the central bank's commentary, where risk assessment often carries as much weight as the rate move itself. For
                        global businesses, the U.K.'s rate trajectory influences sterling performance, borrowing costs, and investor portfolio
                        flows. A steady rate can support short-term stability in financing conditions. However, if policymakers continue to flag persistent inflation risks, longer-term bond yields may remain elevated. The ripple effects extend beyond Britain. For emerging economies like India, higher-for-longer developed market
                        rates can tighten global liquidity conditions.
                        Message fro
                    </p>
                </div>
                <div className="main-banner">
                    <img
                        src={directorDesk}
                        alt="Europe Summit"
                        className="img-fluid mb-3"
                    />
                </div>

                <div className="article-block">
                    <h2>
                        Message from Director's Desk
                    </h2>
                    <h4> SUMIT BHRIYA</h4>
                    <h5>Founder & CEO
</h5>
                    <p>
                        Migration today is increasingly driven by quality of life. In Delhi
                        NCR, worsening air pollution, water contamination, and industrial
                        waste have pushed families to reconsider long-term living choices.
                        Health, sustainability, and cleaner environments are becoming top priorities. For investors, this shift signals opportunity. As people move
                        toward better-planned and less congested regions, demand for residential developments and emerging corridors rises. Capital follows population movement. Livability is now a growth driver, and regions offering healthier ecosystems are positioned to become tomorrow's strongest investment destinations.
                       <br></br> <i>"When quality of life declines, migration becomes a strategy, not a setback.
                            Growth follows those who choose healthier horizons."</i>
                    </p>
                </div>
            </Container>
        </>
    );
}