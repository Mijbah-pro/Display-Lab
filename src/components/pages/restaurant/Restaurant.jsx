import Footer from "@/components/footer";
import NavberMain from "@/components/NavberMain";
import Link from "next/link";
import "./restaurant.css";
function Restaurant() {
    return (
        <>
            <NavberMain />
            <section className="relative overflow-hidden bg-gradient-to-br from-white via-cyan-50 to-sky-100 py-24">
                {/* Background Orbs */}
                <div className="absolute -right-40 top-10 h-[460px] w-[460px] rounded-full bg-cyan-400/10 blur-3xl"></div>
                <div className="absolute -left-32 -bottom-20 h-[240px] w-[240px] rounded-full bg-orange-400/10 blur-3xl"></div>

                <div className="container mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
                    {/* Left Content */}
                    <div>
                        <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[3px] text-cyan-600">
                            Restaurant Digital Signage
                        </span>

                        <h1 className="mb-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-7xl">
                            Turn every screen into a stronger selling tool.
                        </h1>

                        <p className="mb-8 max-w-xl text-lg text-slate-600">
                            Create digital menu boards, promote high-margin items, update prices
                            instantly, and manage every restaurant screen from one simple dashboard.
                        </p>

                        <div className="mb-8 flex flex-wrap gap-4">
                            <Link
                                href="https://displaylab.net/"
                                className="rounded-lg bg-cyan-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-cyan-700"
                            >
                                Start Free Trial
                            </Link>

                            <Link
                                href="#video"
                                className="rounded-lg border border-slate-300 px-8 py-4 font-semibold text-slate-800 transition hover:bg-slate-100"
                            >
                                Watch 90-sec Demo
                            </Link>
                        </div>

                        <div className="flex flex-wrap gap-6 text-sm font-medium text-slate-600">
                            <span>✓ Free setup consultation</span>
                            <span>✓ Works with any screen</span>
                            <span>✓ Setup in minutes</span>
                        </div>
                    </div>

                    {/* Right Preview */}
                    <div className="relative flex justify-center">
                        <div className="w-full max-w-xl -rotate-2 transform rounded-2xl bg-slate-900 p-4 shadow-2xl">
                            {/* Main Menu */}
                            <div className="overflow-hidden rounded-xl">
                                <div className="flex items-center justify-between bg-gradient-to-r from-green-900 to-green-600 p-4 text-white">
                                    <span className="font-bold">FLAVOR UNITED</span>
                                    <small className="text-xs">FRESH • FAST • LOCAL</small>
                                </div>

                                <div className="grid grid-cols-2">
                                    <div className="flex items-end justify-center bg-gradient-to-br from-orange-900 via-orange-500 to-orange-300 p-8 text-center text-xl font-bold text-white">
                                        Signature Burger
                                    </div>

                                    <div className="space-y-4 bg-amber-50 p-6 text-sm">
                                        <div className="flex justify-between">
                                            <b>Classic Burger</b>
                                            <span>$9.99</span>
                                        </div>

                                        <div className="flex justify-between">
                                            <b>Spicy Chicken</b>
                                            <span>$10.99</span>
                                        </div>

                                        <div className="flex justify-between">
                                            <b>Loaded Fries</b>
                                            <span>$6.49</span>
                                        </div>

                                        <div className="flex justify-between">
                                            <b>Family Combo</b>
                                            <span>$29.99</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Combo Menu */}
                            <div className="mt-6 overflow-hidden rounded-xl">
                                <div className="flex items-center justify-between bg-gradient-to-r from-orange-700 to-orange-500 p-4 text-white">
                                    <span className="font-bold">COMBOS</span>
                                    <small>MAKE IT A MEAL</small>
                                </div>

                                <div className="grid grid-cols-3 gap-3 bg-amber-100 p-4">
                                    <div className="rounded bg-white p-4 text-center shadow">
                                        <div className="text-3xl">🍗</div>
                                        <b className="block mt-2">Chicken Combo</b>
                                        <span className="text-orange-600">$12.99</span>
                                    </div>

                                    <div className="rounded bg-white p-4 text-center shadow">
                                        <div className="text-3xl">🍕</div>
                                        <b className="block mt-2">Pizza Combo</b>
                                        <span className="text-orange-600">$14.99</span>
                                    </div>

                                    <div className="rounded bg-white p-4 text-center shadow">
                                        <div className="text-3xl">🥗</div>
                                        <b className="block mt-2">Fresh Bowl</b>
                                        <span className="text-orange-600">$11.49</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Status Card */}
                        <div className="absolute -left-6 bottom-8 rounded-xl border bg-white px-5 py-4 shadow-xl">
                            <div className="flex items-center gap-3">
                                <span className="h-3 w-3 rounded-full bg-green-500"></span>

                                <div>
                                    <b className="block">12 screens online</b>
                                    <small className="text-slate-500">
                                        Updated 18 seconds ago
                                    </small>
                                </div>
                            </div>
                        </div>

                        {/* Floating Sales Card */}
                        <div className="absolute -right-6 top-10 rounded-xl border bg-white px-6 py-5 shadow-xl">
                            <small className="text-slate-500">Featured item lift</small>

                            <h3 className="text-3xl font-bold text-green-600">+24%</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="border-y border-slate-200 bg-white py-6">
                <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 lg:flex-row">
                    <p className="text-center text-sm font-bold uppercase tracking-[2px] text-slate-500 lg:text-left">
                        Built for restaurants of every size
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-slate-600 lg:justify-end">
                        <span>Quick Service</span>
                        <span>Cafés</span>
                        <span>Food Courts</span>
                        <span>Fine Dining</span>
                        <span>Franchises</span>
                        <span>Ghost Kitchens</span>
                    </div>
                </div>
            </section>
            <section id="solutions" className="py-24">
                <div className="container mx-auto max-w-7xl px-6">
                    {/* Section Heading */}
                    <div className="mx-auto mb-16 max-w-3xl text-center">
                        <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[3px] text-cyan-600">
                            ONE PLATFORM. EVERY SCREEN.
                        </span>

                        <h2 className="mb-6 text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
                            Everything your restaurant needs to communicate better.
                        </h2>

                        <p className="text-lg text-slate-600">
                            Keep menus accurate, campaigns timely, and customers engaged across
                            front-of-house and back-of-house displays.
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {/* Featured Card */}
                        <article className="rounded-2xl bg-sky-700 p-8 text-white shadow-xl transition hover:-translate-y-2">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-2xl">
                                ▦
                            </div>

                            <h3 className="mb-4 text-2xl font-bold">
                                Digital Menu Boards
                            </h3>

                            <p className="mb-6 text-sky-100">
                                Update prices, availability, calories, and promotions across one
                                location or an entire chain.
                            </p>

                            <a
                                href="#use-cases"
                                className="font-semibold text-cyan-200 hover:text-white"
                            >
                                Explore menu boards →
                            </a>
                        </article>

                        {/* Card 2 */}
                        <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-2xl text-sky-700">
                                ◷
                            </div>

                            <h3 className="mb-4 text-2xl font-bold">
                                Daypart Scheduling
                            </h3>

                            <p className="text-slate-600">
                                Switch breakfast, lunch, dinner, and late-night menus automatically
                                at the right time.
                            </p>
                        </article>

                        {/* Card 3 */}
                        <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-2xl text-sky-700">
                                ⌁
                            </div>

                            <h3 className="mb-4 text-2xl font-bold">
                                Live Promotions
                            </h3>

                            <p className="text-slate-600">
                                Launch limited offers, happy-hour specials, and seasonal campaigns in
                                seconds.
                            </p>
                        </article>

                        {/* Card 4 */}
                        <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-2xl text-sky-700">
                                ⌘
                            </div>

                            <h3 className="mb-4 text-2xl font-bold">
                                Multi-Location Control
                            </h3>

                            <p className="text-slate-600">
                                Protect brand consistency while giving local teams controlled
                                publishing access.
                            </p>
                        </article>

                        {/* Card 5 */}
                        <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-2xl text-sky-700">
                                ▤
                            </div>

                            <h3 className="mb-4 text-2xl font-bold">
                                Kitchen Displays
                            </h3>

                            <p className="text-slate-600">
                                Show order status, prep instructions, safety reminders, and team
                                updates.
                            </p>
                        </article>

                        {/* Card 6 */}
                        <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-2xl text-sky-700">
                                ◎
                            </div>

                            <h3 className="mb-4 text-2xl font-bold">
                                Analytics &amp; Proof of Play
                            </h3>

                            <p className="text-slate-600">
                                Confirm what played, where it played, and when each campaign was
                                displayed.
                            </p>
                        </article>
                    </div>
                </div>
            </section>
            <section id="use-cases" className="bg-slate-50 py-24">
                <div className="container mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
                    {/* Dashboard Preview */}
                    <div>
                        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
                            {/* Window Bar */}
                            <div className="flex items-center gap-2 border-b bg-slate-50 px-5 py-3">
                                <span className="h-3 w-3 rounded-full bg-red-400"></span>
                                <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                                <span className="h-3 w-3 rounded-full bg-green-400"></span>

                                <b className="ml-3 text-sm text-slate-600">
                                    Display Lab CMS
                                </b>
                            </div>

                            <div className="grid md:grid-cols-[140px_1fr]">
                                {/* Sidebar */}
                                <aside className="space-y-3 bg-slate-900 p-5 text-sm text-slate-300">
                                    <strong className="block text-base text-white">
                                        Dashboard
                                    </strong>

                                    <span className="block rounded-md bg-white/10 px-3 py-2 text-white">
                                        Screens
                                    </span>

                                    <span className="block px-3 py-2">Content</span>
                                    <span className="block px-3 py-2">Playlists</span>
                                    <span className="block px-3 py-2">Schedules</span>
                                    <span className="block px-3 py-2">Reports</span>
                                </aside>

                                {/* Main */}
                                <div className="p-6">
                                    <div className="mb-6 flex items-center justify-between">
                                        <div>
                                            <small className="text-slate-500">
                                                Restaurant Group
                                            </small>

                                            <h4 className="text-2xl font-bold">
                                                Screen Network
                                            </h4>
                                        </div>

                                        <button className="rounded-md bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-700">
                                            + Add screen
                                        </button>
                                    </div>

                                    {/* Cards */}
                                    <div className="grid gap-4 md:grid-cols-3">
                                        <div className="overflow-hidden rounded-lg border">
                                            <div className="h-24 bg-gradient-to-br from-slate-900 to-orange-500"></div>

                                            <div className="p-3">
                                                <b className="block text-sm">
                                                    Lobby Menu 01
                                                </b>

                                                <small className="flex items-center gap-2 text-green-600">
                                                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                                                    Online
                                                </small>
                                            </div>
                                        </div>

                                        <div className="overflow-hidden rounded-lg border">
                                            <div className="h-24 bg-gradient-to-br from-orange-700 to-yellow-400"></div>

                                            <div className="p-3">
                                                <b className="block text-sm">
                                                    Drive-Thru 02
                                                </b>

                                                <small className="flex items-center gap-2 text-green-600">
                                                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                                                    Online
                                                </small>
                                            </div>
                                        </div>

                                        <div className="overflow-hidden rounded-lg border">
                                            <div className="h-24 bg-gradient-to-br from-sky-900 to-cyan-400"></div>

                                            <div className="p-3">
                                                <b className="block text-sm">
                                                    Kitchen Board
                                                </b>

                                                <small className="flex items-center gap-2 text-green-600">
                                                    <span className="h-2 w-2 rounded-full bg-green-500"></span>
                                                    Online
                                                </small>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Timeline */}
                                    <div className="mt-6 rounded-lg border p-4">
                                        <b className="block mb-3">
                                            Today's Schedule
                                        </b>

                                        <div className="flex h-3 overflow-hidden rounded">
                                            <span
                                                className="bg-orange-400"
                                                style={{ width: "27%" }}
                                            ></span>

                                            <span
                                                className="bg-cyan-500"
                                                style={{ width: "33%" }}
                                            ></span>

                                            <span
                                                className="bg-slate-900"
                                                style={{ width: "40%" }}
                                            ></span>
                                        </div>

                                        <small className="mt-2 flex justify-between text-slate-500">
                                            <span>Breakfast</span>
                                            <span>Lunch</span>
                                            <span>Dinner</span>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div>
                        <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[3px] text-cyan-600">
                            FAST, SIMPLE CONTROL
                        </span>

                        <h2 className="mb-6 text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
                            Update your menu before customers reach the counter.
                        </h2>

                        <p className="mb-8 text-lg text-slate-600">
                            Build content in your browser, schedule it by time and location,
                            and publish instantly. Your screens keep playing even if the
                            internet drops.
                        </p>

                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 font-bold text-cyan-700">
                                    ✓
                                </span>

                                <div>
                                    <b className="block text-lg">
                                        Drag-and-drop content editor
                                    </b>

                                    <small className="text-slate-600">
                                        Create polished layouts without a designer.
                                    </small>
                                </div>
                            </li>

                            <li className="flex gap-4">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 font-bold text-cyan-700">
                                    ✓
                                </span>

                                <div>
                                    <b className="block text-lg">
                                        Reusable restaurant templates
                                    </b>

                                    <small className="text-slate-600">
                                        Launch faster with pre-built menu and promotion designs.
                                    </small>
                                </div>
                            </li>

                            <li className="flex gap-4">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100 font-bold text-cyan-700">
                                    ✓
                                </span>

                                <div>
                                    <b className="block text-lg">
                                        Role-based permissions
                                    </b>

                                    <small className="text-slate-600">
                                        Control who can design, approve, and publish.
                                    </small>
                                </div>
                            </li>
                        </ul>

                        <a
                            href="#demo"
                            className="mt-8 inline-block font-semibold text-cyan-700 hover:text-cyan-900"
                        >
                            See how the CMS works →
                        </a>
                    </div>
                </div>
            </section>
            <section className="section hardware-section" id="hardware">
                <div className="container">
                    <div className="section-heading">
                        <span className="eyebrow">FLEXIBLE HARDWARE</span>
                        <h2>Use your screens, or let Display Lab provide the full setup.</h2>
                    </div>
                    <div className="hardware-grid">
                        <article><div className="hardware-visual tv"><span>MENU</span></div><h3>Indoor Menu Displays</h3><p>Commercial displays for counter, wall, and overhead installations.</p></article>
                        <article><div className="hardware-visual kiosk"><span>ORDER</span></div><h3>Self-Ordering Kiosks</h3><p>Interactive touch displays built for faster ordering and upselling.</p></article>
                        <article><div className="hardware-visual window"><span>SPECIALS</span></div><h3>Window Displays</h3><p>High-brightness storefront screens that promote menus, offers, and seasonal campaigns.</p></article>
                        <article><div className="hardware-visual promo"><span><b>20% OFF</b><small>SCAN TO ORDER</small></span></div><h3>Digital Promotion Kiosks</h3><p>Freestanding promotional displays for offers, loyalty programs, new items, and QR campaigns.</p></article>
                        <article><div className="hardware-visual drive"><span>DRIVE-THRU</span></div><h3>Outdoor Displays</h3><p>High-brightness, weather-ready screens for drive-thru and pickup areas.</p></article>
                    </div>
                </div>
            </section>
            <section
                id="results"
                className="bg-gradient-to-r from-slate-900 to-sky-800 py-24 text-white"
            >
                <div className="container mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
                    {/* Left Content */}
                    <div>
                        <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[3px] text-cyan-300">
                            DESIGNED FOR REVENUE
                        </span>

                        <h2 className="mb-6 text-4xl font-extrabold leading-tight lg:text-5xl">
                            Promote the right item at the right moment.
                        </h2>

                        <p className="max-w-lg text-lg leading-8 text-slate-300">
                            Use visual hierarchy, timed offers, and smart content rotation to
                            influence purchasing decisions without slowing service.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid gap-5 sm:grid-cols-2">
                        <div className="rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur-sm transition hover:bg-white/15">
                            <strong className="block text-5xl font-bold">60 sec</strong>
                            <span className="mt-3 block text-slate-300">
                                to publish a menu update
                            </span>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur-sm transition hover:bg-white/15">
                            <strong className="block text-5xl font-bold">24/7</strong>
                            <span className="mt-3 block text-slate-300">
                                remote screen management
                            </span>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur-sm transition hover:bg-white/15">
                            <strong className="block text-5xl font-bold">99.9%</strong>
                            <span className="mt-3 block text-slate-300">
                                platform uptime target
                            </span>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur-sm transition hover:bg-white/15">
                            <strong className="block text-5xl font-bold">1 Dashboard</strong>
                            <span className="mt-3 block text-slate-300">
                                for every location and screen
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-white">
                <div className="container mx-auto max-w-7xl px-6">
                    {/* Section Heading */}
                    <div className="mx-auto mb-16 max-w-3xl text-center">
                        <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[3px] text-cyan-600">
                            GET STARTED FAST
                        </span>

                        <h2 className="text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
                            From blank screen to live menu in three steps.
                        </h2>
                    </div>

                    {/* Steps */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Step 1 */}
                        <article className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <span className="absolute right-6 top-6 text-5xl font-black text-slate-100">
                                01
                            </span>

                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-3xl text-cyan-700">
                                ▣
                            </div>

                            <h3 className="mb-4 text-2xl font-bold text-slate-900">
                                Connect your screen
                            </h3>

                            <p className="leading-7 text-slate-600">
                                Install the Display Lab player on your device or connect our media
                                player.
                            </p>
                        </article>

                        {/* Step 2 */}
                        <article className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <span className="absolute right-6 top-6 text-5xl font-black text-slate-100">
                                02
                            </span>

                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-3xl text-cyan-700">
                                ✎
                            </div>

                            <h3 className="mb-4 text-2xl font-bold text-slate-900">
                                Create your content
                            </h3>

                            <p className="leading-7 text-slate-600">
                                Choose a template, upload files, or design your menu from scratch.
                            </p>
                        </article>

                        {/* Step 3 */}
                        <article className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                            <span className="absolute right-6 top-6 text-5xl font-black text-slate-100">
                                03
                            </span>

                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-3xl text-cyan-700">
                                ▶
                            </div>

                            <h3 className="mb-4 text-2xl font-bold text-slate-900">
                                Schedule and publish
                            </h3>

                            <p className="leading-7 text-slate-600">
                                Send content to one screen, one location, or your full restaurant
                                network.
                            </p>
                        </article>
                    </div>
                </div>
            </section>
            <section id="video" className="bg-slate-50 py-24">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="relative overflow-hidden rounded-3xl bg-white p-10 shadow-xl lg:p-16">
                        {/* Quote Icon */}
                        <div className="absolute left-8 top-6 text-8xl font-black leading-none text-cyan-100">
                            “
                        </div>

                        {/* Testimonial */}
                        <blockquote className="relative z-10 mb-10 text-xl font-medium leading-9 text-slate-700 lg:text-2xl">
                            Display Lab gives our team one place to update menu pricing, launch
                            promotions, and keep every location consistent. Changes that once took
                            days now take minutes.
                        </blockquote>

                        {/* Person */}
                        <div className="flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-600 text-lg font-bold text-white">
                                FU
                            </div>

                            <div>
                                <h4 className="text-lg font-bold text-slate-900">
                                    Operations Director
                                </h4>

                                <p className="text-slate-500">
                                    Multi-location restaurant group
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white py-24">
                <div className="container mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
                    {/* Left Content */}
                    <div>
                        <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[3px] text-cyan-600">
                            QUESTIONS
                        </span>

                        <h2 className="mb-6 text-4xl font-extrabold text-slate-900 lg:text-5xl">
                            Restaurant Signage FAQ
                        </h2>

                        <p className="text-lg text-slate-600">
                            Clear answers for planning your setup.
                        </p>
                    </div>

                    {/* FAQ */}
                    <div className="space-y-4">
                        <details
                            open
                            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                        >
                            <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900">
                                Can I use my existing TVs and screens?
                            </summary>

                            <p className="mt-4 leading-7 text-slate-600">
                                Yes. Display Lab works with most modern displays and media players.
                                We can also recommend commercial-grade hardware for new
                                installations.
                            </p>
                        </details>

                        <details className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900">
                                Can different locations show different pricing?
                            </summary>

                            <p className="mt-4 leading-7 text-slate-600">
                                Yes. You can assign unique content, pricing, and schedules by
                                screen, location, region, or franchise group.
                            </p>
                        </details>

                        <details className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900">
                                What happens if the internet goes down?
                            </summary>

                            <p className="mt-4 leading-7 text-slate-600">
                                Previously downloaded content continues to play locally. The player
                                reconnects and syncs automatically when service returns.
                            </p>
                        </details>

                        <details className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900">
                                Can my team approve content before it goes live?
                            </summary>

                            <p className="mt-4 leading-7 text-slate-600">
                                Yes. Role and permission controls can separate content creation,
                                approval, and publishing responsibilities.
                            </p>
                        </details>
                    </div>
                </div>
            </section>
            <section
                id="demo"
                className="bg-gradient-to-r from-cyan-600 to-sky-700 py-24 text-white"
            >
                <div className="container mx-auto max-w-7xl px-6">
                    <div className="flex flex-col items-center justify-between gap-10 rounded-3xl bg-white/10 p-10 backdrop-blur-md lg:flex-row lg:p-16">
                        {/* Left Content */}
                        <div className="max-w-2xl">
                            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[3px] text-cyan-100">
                                READY TO MODERNIZE YOUR RESTAURANT?
                            </span>

                            <h2 className="mb-6 text-4xl font-extrabold leading-tight lg:text-5xl">
                                Make every screen work harder for your business.
                            </h2>

                            <p className="text-lg leading-8 text-cyan-50">
                                Start your free trial or schedule a guided restaurant signage demo.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <a
                                href="mailto:sales@displaylab.net"
                                className="rounded-xl bg-white px-8 py-4 text-center font-semibold text-sky-700 shadow-lg transition hover:scale-105 hover:bg-slate-100"
                            >
                                Book a Demo
                            </a>

                            <a
                                href="#top"
                                className="rounded-xl border border-white px-8 py-4 text-center font-semibold text-white transition hover:bg-white hover:text-sky-700"
                            >
                                Try For Free
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Restaurant;