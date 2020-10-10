<div id='portfolio-cont'>
                <div id='portfolio-header'>
                    <div id='header-text'>
                        <h2>Grid Gallery</h2>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link color="inherit" href="/">
                                Home
                            </Link>
                            <Link color="textPrimary" href="/components/breadcrumbs/" aria-current="page">
                                Portfolio
                            </Link>
                            </Breadcrumbs>
                    </div>
                </div>
                <div id='portfolio-nav'>
                    <Button variant="contained" color="primary" disableElevation>Drawings</Button>
                    <Button variant="contained" color="primary" disableElevation>Portraits</Button>
                </div>
            </div>



<div className={classes.root}>
<AppBar style={{"backgroundColor":"pink", "color":"black"}} position="static">
    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
    <Tab label="Description" {...a11yProps(0)} />
    <Tab label="Comes With" {...a11yProps(1)} />
    <Tab label="Specs" {...a11yProps(2)} />
    </Tabs>
</AppBar>
<TabPanel style={{"textAlign":"left"}} value={value} index={0}>
    <p>With a real fan inside, SNOOZ is a portable white noise machine that turns your bedroom into a haven for sleep.</p>
    <ul>
        <li>Full-spectrum sound helps you fall asleep and stay asleep</li>
        <li>Real fan inside (without unwanted cold air in cooler months)</li>
        <li>Adjustable tone & 10 volume settings</li>
        <li>Optional iOS and Android companion apps for added functionality</li>
        <li>Travel-friendly</li>
    </ul>
</TabPanel>
<TabPanel style={{"textAlign":"left"}} value={value} index={1}>
    <ul>
        <li>Pepper Spray - Spray up to distances of 25 ft. or less</li>
        <li>Light - Flashes up to 20 ft.</li>
        <li>Stick - Poke around !</li>
        <li>Brass Knuckles - With the force of Thor it works !</li>
        <li>hand Sanitizer - Clean hands up and germ free!</li>
    </ul>
</TabPanel>
<TabPanel style={{"textAlign":"left"}} value={value} index={2}>
    <ul>
        <li>Diameter: 5.6 in</li>
        <li>Height: 3.2 in</li>
        <li>Weight: 1.1 lbs</li>
        <li>Pepper Spray: 2,5 Fl. OZ</li>
        <li>U.S. Patent No.: US 10,510,335 B2</li>
    </ul>
</TabPanel>
</div> 