/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  const mosArray = [
    '00B: Diver_Enlisted',
    '00E: Recruiter Enlisted',
    '00H: Enlisted Aide	Enlisted',
    '00R: Recruiter/Retention NCO	Enlisted',
    '00Z: Command Sergeant Major Nominative	Enlisted',
    '01A: Officer Generalist	Officer',
    '01B: Electrical-Electronic Engineering Assistant	Enlisted',
    '01B: Aviation/Infantry/Armor/Military Intelligence Immaterial	Officer',
    '01C: Mechanical Engineering Assistant	Enlisted',
    '01C: Chemical/Engineer/Military Police Immaterial	Officer',
    '01D: Civil Engineering Assistant	Enlisted',
    '01D: Financial Management/Adjutant General immaterial	Officer',
    '01E: Mathematics-Statistics Assistant	Enlisted',
    '01F: Physical Sciences Assistant	Enlisted',
    // 01G	Chemical Engineering Assistant	Enlisted
    // 01H	Biological Sciences Assistant	Enlisted
    // 02A	Army Bandperson	Enlisted
    // 02A	Combat Arms Generalist	Officer
    // 02B	Cornet or Trumpet Player	Enlisted
    // 02B	Infantry/Armor Immaterial	Officer
    // 02C	Baritone or Euphonium Player	Enlisted
    // 02C	Infantry/Armor/Field Artillery/Engineer Immaterial	Officer
    // 02D	French Horn Player	Enlisted
    // 02E	Trombone Player	Enlisted
    // 02F	Tuba Player	Enlisted
    // 02G	Flute or Piccolo Player	Enlisted
    // 02H	Oboe Player	Enlisted
    // 02J	Clarinet Player	Enlisted
    // 02K	Bassoon Player	Enlisted
    // 02L	Saxophone Player	Enlisted
    // 02M	Percussion Player	Enlisted
    // 02N	Keyboard Player	Enlisted
    // 02N	Piano Player	Enlisted
    // 02P	Brass Group Leader	Enlisted
    // 02Q	Woodwind Group Leader	Enlisted
    // 02R	Percussion Group Leader	Enlisted
    // 02S	Special Bandmember	Enlisted
    // 02T	Guitar Player	Enlisted
    // 02U	Electric Bass Player	Enlisted
    // 02Z	Bands Senior Sergeant	Enlisted
    // 03B	Performing Arts Specialist	Enlisted
    // 03C	Physical Activities Specialist	Enlisted
    // 03D	Arts and Crafts Specialist	Enlisted
    // 03Z	Special Services Senior Sergeant	Enlisted
    // 04B	Translator-Interpreter	Enlisted
    // 05A	Army Medical Department (AMEDD) Immaterial	Officer
    // 05B	Radio Operator	Enlisted
    // 05C	Radio Teletype Operator	Enlisted
    // 05D	Electronic Warfare/Signal Intelligence Emitter Identifier/Locator	Enlisted
    // 05E	Voice Radio Operator	Enlisted
    // 05F	Radio Teletypewriter Operator (Non-Morse)	Enlisted
    // 05G	Signal Security Specialist	Enlisted
    // 05H	Electronic Warfare/Signal Intelligence Morse Interceptor	Enlisted
    // 05K	Electronic Warfare/Signal Intelligence Non-Morse Interceptor	Enlisted
    // 09L	Interpreter/Translator	Enlisted
    // 11A: Infantry_Officer
    // 11B	Infantryman	Enlisted
    // 11C	Indirect Fire Infantryman	Enlisted
    // 11D	Armor Reconnaissance Specialist	Enlisted
    // 11E	Armor Crewman	Enlisted
    // 11H	Heavy Anti-armor Weapons Crewman	Enlisted
    // 11L	lnfantry Senior Sergeant	Enlisted
    // 11M	Fighting Vehicle Infantryman	Enlisted
    // 11Z	Infantry Senior Sergeant	Enlisted
    // 120A	Construction Engineering Technician	Warrant Officer
    // 125D	Geospatial Engineering Technician	Warrant Officer
    // 12A	Armor, General	Officer
    // 12A	Engineer	Officer
    // 12A	General Engineer	Officer
    // 12A	Engineer Senior Sergeant	Enlisted
    // 12B	Armor	Officer
    // 12B	Combat Engineer	Officer
    // 12B	Combat Engineer	Enlisted
    // 12B	Combat Engineer	Enlisted
    // 12C	Bridge Crewmember	Enlisted
    // 12C	Cavalry	Officer
    // 12C	Bridge Crewman	Enlisted
    // 12D	Facilities/Contract Construction Management Engineer (FCCME)	Officer
    // 12D	Diver	Enlisted
    // 12E	Atomic Demolition Munitions (ADM) Specialist	Enlisted
    // 12F	Engineer Tracked Vehicle Crewman	Enlisted
    // 12G	Quarrying Specialist	Enlisted
    // 12H	Construction Engineering Supervisor	Enlisted
    // 12K	Plumber	Enlisted
    // 12M	Firefighter	Enlisted
    // 12N	Horizontal Construction Engineer	Enlisted
    // 12P	Prime Power Production Specialist	Enlisted
    // 12Q	Power Line Distribution Specialist	Enlisted
    // 12R	Interior Electrician	Enlisted
    // 12T	Technical Engineer	Enlisted
    // 12V	Concrete and Asphalt Equipment Operator	Enlisted
    // 12W	Carpentry and Masonry Specialist	Enlisted
    // 12X	General Engineering Supervisor	Enlisted
    // 12X	General Engineering Supervisor	Enlisted
    // 12Y	Geospatial Engineer	Enlisted
    // 12Z	Engineering Senior Sergeant	Enlisted
    // 12Z	Combat Engineering Senior Sergeant	Enlisted
    // 12Z	Combat Engineering Senior Sergeant	Enlisted
    // 131A	Field Artillery Targeting Technician	Warrant Officer
    // 13A	Field Artillery, General	Officer
    // 13B	Cannon Crewmember	Enlisted
    // 13B	Light Missile Field Artillery	Officer
    // 13C	Tactical Automated Fire Control Systems Specialist	Enlisted
    // 13D	Field Artillery Automated tactical Data Systems Specialist	Enlisted
    // 13D	Field Artillery Target Acquisition	Officer
    // 13E	Cannon Fire Direction Specialist	Enlisted
    // 13E	Cannon Field Artillery	Officer
    // 13F	Fire Support Specialist	Enlisted
    // 13M	Multiple Launch Rocket System (MLRS)	Enlisted
    // 13M	Multiple Launch Rocket System	Enlisted
    // 13N	Lance Crewmember	Enlisted
    // 13P	Multiple Launch Rocket System/Fire Direction Specialist	Enlisted
    // 13R	Field Artillery Firefinder Radar Operator	Enlisted
    // 13S	Field Artillery Surveyor	Enlisted
    // 13T	Field Artillery Metrological/Surveyor Crewmember	Enlisted
    // 13W	Field Artillery Meteorological Crewmembers	Enlisted
    // 13Y	Cannon/Missile Senior Sergeant	Enlisted
    // 13Z	Field Artillery (FA) Senior Sergeant	Enlisted
    // 140A	Command and Control Systems Integrator	Warrant Officer
    // 140B	FAAD Systems Technician (Reserve Component only)	Warrant Officer
    // 140D	HAWK Systems Technician (Reserve Component only)	Warrant Officer
    // 140E	Air and Missile Defense (AMD) Systems Tactician/Technician	Warrant Officer
    // 140X	Air Defense Artillery Immaterial	Warrant Officer
    // 14A	Air Defense Artillery Officer	Officer
    // 14B	Short-Range Air Defense Artillery (Shorad)	Officer
    // 14D	Hawk Missile System Crewmember (RC)	Enlisted
    // 14D	Hawk Missile Air Defense Artillery	Officer
    // 14E	PATRIOT Fire Control Enhanced Operator/Maintainer	Enlisted
    // 14E	Patriot Missile Air Defense Artillery	Officer
    // 14G	Air Defense (AD) Battle Management System Operator	Enlisted
    // 14H	Air Defense (AD) Enhanced Early Warning System Operator	Enlisted
    // 14J	Air Defense Command, Control, Communications, Computers Maintainer	Enlisted
    // 14L	AN/TSQ 73 Air Defense Artillery System Operator	Enlisted
    // 14M	Man Portable Air Defense System Crewmember	Enlisted
    // 14R	Bradley Linebacker Crewmember	Enlisted
    // 14S	Avenger Crewmember	Enlisted
    // 14S	Air and Missile Defense (AMD) Crewmember	Enlisted
    // 14T	PATRIOT Launching Station Enhanced Operator/Maintainer	Enlisted
    // 14Z	Air Defense Artillery (ADA) Senior Sergeant	Enlisted
    // 150A	Air Traffic and Air Space Management Technician	Warrant Officer
    // 150U	Unmanned Aircraft Systems Operations Technician	Warrant Officer
    // 151A	Aviation Maintenance Technician	Warrant Officer
    // 152B	OH-58A/C Scout	Warrant Officer
    // 152C	OH-6 Pilot	Warrant Officer
    // 152D	OH-58D Pilot	Warrant Officer
    // 152E	RAH-66 COMMANCHE Pilot	Warrant Officer
    // 152E	ARH-70A Pilot	Warrant Officer
    // 152F	AH-64A Attack Pilot	Warrant Officer
    // 152G	AH-1 Attack Pilot (RC)	Warrant Officer
    // 152H	AH-64D Attack Pilot	Warrant Officer
    // 153A	Rotary Wing Aviator (Aircraft Nonspecific)	Warrant Officer
    // 153B	UH-1 Pilot (Reserve Component only)	Warrant Officer
    // 153D	UH-60 Pilot	Warrant Officer
    // 153E	MH-60 Pilot	Warrant Officer
    // 153L	UH-72A Pilot (RC only)	Warrant Officer
    // 153M	UH-60M Pilot	Warrant Officer
    // 154C	CH-47D Pilot	Warrant Officer
    // 154E	MH-47 Pilot	Warrant Officer
    // 154F	CH-47F Pilot	Warrant Officer
    // 155A	Fixed Wing Aviator (Aircraft Nonspecific)	Warrant Officer
    // 155D	U-21 Pilot	Warrant Officer
    // 155E	C-12 Pilot	Warrant Officer
    // 155F	Jet Aircraft Pilot	Warrant Officer
    // 155G	O-5A/EO-5B/RC-7 Pilot	Warrant Officer
    // 156A	OV-1/RV-1 Pilot	Warrant Officer
    // 15A	Aviation, General	Officer
    // 15A	Aviation Life Support Systems Repairer (ALSS Rep)	Enlisted
    // 15B	Aviation Combined Arms Operations	Officer
    // 15B	Aircraft Powerplant Repairer	Enlisted
    // 15C	Aviation All-Source Intelligence	Officer
    // 15D	Aircraft Powertrain Repairer	Enlisted
    // 15D	Aviation Logistics	Officer
    // 15E	Unmanned Aircraft Systems Repairer	Enlisted
    // 15F	Aircraft Electrician	Enlisted
    // 15G	Aircraft Structural Repairer	Enlisted
    // 15H	Aircraft Pneudraulics Repairer	Enlisted
    // 15J	OH-58D Armament/Electrical/Avionics Systems Repairer	Enlisted
    // 15K	Aircraft Components Repair Supervisor	Enlisted
    // 15M	UH-1 Helicopter Repairer (RC)	Enlisted
    // 15N	Avionic Mechanic	Enlisted
    // 15P	Aviation Operations Specialist	Enlisted
    // 15Q	Air Traffic Control (ATC) Operator (ATC Operator)	Enlisted
    // 15Q	Air Traffic Control Operator	Enlisted
    // 15R	AH-64 Attack Helicopter Repairer	Enlisted
    // 15S	OH-58D Helicopter Repairer	Enlisted
    // 15T	UH-60 Helicopter Repairer	Enlisted
    // 15U	CH-47 Helicopter Repairer	Enlisted
    // 15V	Observation/Scout Helicopter Repairer (RC)	Enlisted
    // 15W	Unmanned Aerial Vehicle Operator	Enlisted
    // 15X	AH-64A Armament/Electrical/Avionics Systems Repairer (AH-64A	Enlisted
    // 15X	AH-64A Armament/Electrical/Avionics Systems Repairer	Enlisted
    // 15Y	AH-64D Armament/Electrical/Avionics Systems Repairer	Enlisted
    // 15Z	Field Artillery Missile/Rocket Senior Sergeant	Enlisted
    // 15Z	Aircraft Maintenance Senior Sergeant	Enlisted
    // 16B	Hercules Missile Crew Member	Enlisted
    // 16C	Hercules Fire Control Crew Member	Enlisted
    // 16D	Hawk Missile Crewmember	Enlisted
    // 16E	Hawk Fire Control Crewmember	Enlisted
    // 16F	Light Air Defense Artillery Crewmember	Enlisted
    // 16J	Defense Acquisition Radar Operator	Enlisted
    // 16J	Forward Area Alerting Radar Crewman	Enlisted
    // 16L	Sgt. York Air Defense Gun System Crewmember	Enlisted
    // 16P	Chaparral Crewmember	Enlisted
    // 16R	Vulcan Crewmember	Enlisted
    // 16S	Man Portable Air Defense System (MANPADS) Crewmember or Pedestal Mounted Stinger Crewmember	Enlisted
    // 16S	Man Portable Air Defense System (MANPADS) Crewmember or Pedestal M	Enlisted
    // 16T	Patriot Missile Crewmember	Enlisted
    // 16Z	Air Defense Artillery Senior Sergeant	Enlisted
    // 17A	Combat Surveillance and Target Acquisition Crewman	Enlisted
    // 17B	Field Artillery Radar Crewmember	Enlisted
    // 17C	Field Artillery Target Acquisition Specialist	Enlisted
    // 17D	Flash Ranging Crewman	Enlisted
    // 17E	Field Illumination Crewman	Enlisted
    // 17K	Ground Surveillance Radar Crewman	Enlisted
    // 17L	Aerial Sensor Specialist (OV-1B/C)	Enlisted
    // 17M	Unattended Ground Sensor Specialist	Enlisted
    // 17Z	Combat Surveillance and Target Acquisition NCO	Enlisted
    // 180A	Special Forces Warrant Officer	Warrant Officer
    // 18A	Special Forces	Officer
    // 18B	Special Forces Weapons Sergeant	Enlisted
    // 18C	Special Forces Engineer Sergeant	Enlisted
    // 18D	Special Forces Medical Sergeant	Enlisted
    // 18E	Special Forces Communications Sergeant	Enlisted
    // 18F	Special Forces Assistant Operations and Intelligence Sergeant	Enlisted
    // 18Z	Special Forces Senior Sergeant	Enlisted
    // 19A	Armor, General	Officer
    // 19B	Armor	Officer
    // 19C	Cavalry	Officer
    // 19D	Cavalry Scout	Enlisted
    // 19E	M48-M60 Armor Crewman	Enlisted
    // 19F	Tank Driver	Enlisted
    // 19G	Armor Reconnaissance Vehicle Crewman	Enlisted
    // 19H	Armor Reconnaissance Vehicle Driver	Enlisted
    // 19J	M60A2 Armor Crewman	Enlisted
    // 19K	M1 Armor Crewman	Enlisted
    // 19Z	Armor Senior Sergeant	Enlisted
    // 210A	Utilities Operation and Maintenance Technician	Warrant Officer
    // 210A	Construction Engineering Technician	Warrant Officer
    // 215D	Geospatial Engineering	Warrant Officer
    // 215D	Geospatial Information Technician	Warrant Officer
    // 215D	Terrain Analysis Technician	Warrant Officer
    // 21A	Engineer General	Officer
    // 21B	Combat Engineer	Enlisted
    // 21B	Combat Engineer	Officer
    // 21C	Bridge Crewman	Enlisted
    // 21D	Facilities/Contract Construction Management Engineer (FCCME)	Officer
    // 21D	Diver	Enlisted
    // 21E	Heavy Construction Equipment Operator	Enlisted
    // 21F	Crane Operator	Enlisted
    // 21G	Quarrying Specialist	Enlisted
    // 21H	Construction Engineering Supervisor	Enlisted
    // 21J	General Construction Equipment Operator	Enlisted
    // 21K	Plumber	Enlisted
    // 21L	Lithographer	Enlisted
    // 21M	Firefighter	Enlisted
    // 21N	Horizontal Construction Engineer	Enlisted
    // 21N	Construction Equipment Supervisor	Enlisted
    // 21P	Prime Power Production Specialist	Enlisted
    // 21Q	Power Line Distribution Specialist (RC)	Enlisted
    // 21R	Interior Electrician	Enlisted
    // 21S	Sergeant Missile Guidance Repairman	Enlisted
    // 21S	Topographic Surveyor	Enlisted
    // 21T	Technical Engineering Specialist	Enlisted
    // 21U	Topographic Analyst	Enlisted
    // 21V	Concrete and Asphalt Equipment Operator	Enlisted
    // 21W	Carpentry and Masonry Specialist	Enlisted
    // 21X	General Engineering Supervisor	Enlisted
    // 21Y	Geospatial Engineer	Enlisted
    // 21Z	Combat Engineering Senior Sergeant	Enlisted
    // 22K	Hawk Missile and Launcher Repairer	Enlisted
    // 22L	Nike Test Equipment Repairer	Enlisted
    // 22N	Nike-Hercules Missile Launcher Repairer	Enlisted
    // 23N	Nike Track Radar Repairer	Enlisted
    // 23Q	Hawk Fire Control Repairman	Enlisted
    // 23R	Hawk Missile System Mechanic	Enlisted
    // 23S	Hawk Pulse Radar Repairman	Enlisted
    // 23T	Hawk Continuous Wave Radar Repairman	Enlisted
    // 23U	Nike High Power Radar-Simulator Repairer	Enlisted
    // 23V	Hawk Maintenance Chief	Enlisted
    // 23W	Nike Maintenance Chief	Enlisted
    // 24A	Telecommunications Systems Engineer (functional Area)	Officer
    // 24B	Hawk Continuous Wave Radar Mechanic	Enlisted
    // 24B	Data Systems Engineer	Officer
    // 24C	Hawk Firing Section Mechanic	Enlisted
    // 24D	Hawk Missile-Launcher Mechanic	Enlisted
    // 24E	Hawk Fire Control Mechanic	Enlisted
    // 24F	Hawk Fire Control Mechanic	Enlisted
    // 24G	Hawk Information Coordination Central Mechanic	Enlisted
    // 24H	Hawk Fire Control Repairer	Enlisted
    // 24J	Hawk Pulse Radar Repairer	Enlisted
    // 24K	Hawk Continuous Wave Radar Repairer	Enlisted
    // 24L	Hawk Launcher and Mechanical Systems Repairer	Enlisted
    // 24M	Vulcan System Mechanic	Enlisted
    // 24N	Chaparral System Mechanic	Enlisted
    // 24P	Defense Acquisition Radar Mechanic	Enlisted
    // 24Q	Nike-Hercules Fire Control Mechanic	Enlisted
    // 24R	Hawk Master Mechanic	Enlisted
    // 24T	Patriot Operator and System Mechanic	Enlisted
    // 24U	Nike-Hercules Custodial Mechanic	Enlisted
    // 24V	Hawk Maintenance Chief	Enlisted
    // 24W	Sgt. York Air Defense Gun System Mechanic	Enlisted
    // 250A	Communications Security Technician	Warrant Officer
    // 250A	Telecommunications Technician	Warrant Officer
    // 250B	Tactical Automated Network Technician	Warrant Officer
    // 250N	Network Management Technician	Warrant Officer
    // 251A	Information Systems Technician	Warrant Officer
    // 254A	Signal Systems Support Technician	Warrant Officer
    // 255A	Information Services Technician	Warrant Officer
    // 255N	Network Management Technician	Warrant Officer
    // 255S	Information Protection Technician	Warrant Officer
    // 255Z	Senior Signal Systems Technician	Warrant Officer
    // 255Z	Senior Network Operations Technician	Warrant Officer
    // 256A	Communications-Electronics Repair Technician	Warrant Officer
    // 25A	Signal, Operations	Officer
    // 25B	Information Technology Specialist	Enlisted
    // 25B	Communications-Electronics (C-E) Automation	Officer
    // 25C	Radio Operator-Maintainer	Enlisted
    // 25C	Communications-Electronics (C-E) Operations	Officer
    // 25D	Telecommunications Operator/Maintainer	Enlisted
    // 25D	Communications-Electronics (C-E) Engineering	Officer
    // 25E	Electromagnetic Spectrum Manager	Enlisted
    // 25E	Information Systems and Networking	Officer
    // 25F	Network Switching Systems Operator-Maintainer	Enlisted
    // 25G	Mobile ADCP Monitor Repairman	Enlisted
    // 25H	Radar Data Processing Equipment Repairman	Enlisted
    // 25J	Operations Central Repairer	Enlisted
    // 25K	AN/TSQ-51 System Repairman/Maintenance Chief	Enlisted
    // 25L	AN/TSQ-73 ADA Command & Control System Operator/Maintainer	Enlisted
    // 25L	Cable Systems Installer-Maintainer	Enlisted
    // 25M	Multimedia Illustrator	Enlisted
    // 25N	Nodal Network Systems Operator-Maintainer	Enlisted
    // 25P	Microwave Systems Operator-Maintainer	Enlisted
    // 25Q	Multichannel Transmission Systems Operator-Maintainer	Enlisted
    // 25Q	Multichannel Transmission Systems	Enlisted
    // 25R	Visual Information/Audio Equipment Repairer	Enlisted
    // 25S	Satellite Communication Systems Operator-Maintainer	Enlisted
    // 25T	Satellite/Microwave Systems Chief	Enlisted
    // 25U	Signal Support Systems Specialist	Enlisted
    // 25V	Combat Documentation/Production Specialist	Enlisted
    // 25W	Telecommunications Operations Chief	Enlisted
    // 25X	Senior Signal Sergeant	Enlisted
    // 25Y	Information Systems Chief	Enlisted
    // 25Z	Visual Information Operations Chief	Enlisted
    // 26B	Weapons Support Radar Repairer	Enlisted
    // 26C	Target Acquisition/Surveillance Radar Repairer	Enlisted
    // 26D	Ground Control Approach Radar Repairer	Enlisted
    // 26E	Aerial Radar Sensor Repairer	Enlisted
    // 26F	Aerial Photoactive Sensor Repairer	Enlisted
    // 26H	Air Defense Radar Repairer	Enlisted
    // 26K	Aerial Electronic Warning Defense Equipment Repairer	Enlisted
    // 26L	Tactical Microwave Systems Repairer	Enlisted
    // 26M	Aerial Surveillance Radar Repairer	Enlisted
    // 26N	Aerial Surveillance Infrared Repairer	Enlisted
    // 26P	Radio Propagation Specialist	Enlisted
    // 26Q	Tactical Satellite/Microwave Systems Operator	Enlisted
    // 26R	Strategic Satellite/Microwave System Operator	Enlisted
    // 26T	Radio/Television Systems Specialist	Enlisted
    // 26U	Unattended Ground Sensor Systems Repairman	Enlisted
    // 26V	Strategic Microwave Systems Repairer	Enlisted
    // 26W	Radar Maintenance Supervisor-Inspector	Enlisted
    // 26Y	Satellite Communications Ground Station Equipment Repairer	Enlisted
    // 270A	Legal Administrator	Warrant Officer
    // 27A	Judge Advocate, General	Officer
    // 27B	Military Judge	Officer
    // 27B	Land Combat Support System (LCSS) Test Specialist	Enlisted
    // 27D	Paralegal Specialist	Enlisted
    // 27E	Land Combat Electronic Missile System Repairer	Enlisted
    // 27F	Vulcan Repairer	Enlisted
    // 27G	Chaparral and Redeye Repairer	Enlisted
    // 27H	Hawk Field Maintenance Equipment and Firing Repairer	Enlisted
    // 27J	Hawk Field Maintenance Equipment/Pulse Acquisition Radar Repairer	Enlisted
    // 27K	Hawk Fire Control/Continuous Wave Radar Repairer	Enlisted
    // 27L	Lance System Repairer	Enlisted
    // 27M	Multiple Launch Rocket System (MLRS) Repairer	Enlisted
    // 27N	Forward Area Alerting Radar (FAAR) Repairer	Enlisted
    // 27P	Sgt. York Air Defense Gun System Radar/Electronic Repairer	Enlisted
    // 27Q	Sgt. York Air Defense Gun System Test Specialist	Enlisted
    // 27T	Avenger System Repairer	Enlisted
    // 27V	Hawk Maintenance Chief	Enlisted
    // 27X	Patriot System Repairer	Enlisted
    // 27Z	Missile Systems Maintenance Chief	Enlisted
    // 28M	Anti-Ballistic Missile Maintenance Specialist	Enlisted
    // 290A	Electronic Warfare (EW) Technician	Warrant Officer
    // 29A	Electronic Warfare Officer (Functional Area)	Officer
    // 29E	Electronic Warfare Specialist	Enlisted
    // 29E	Communications Electronics Radio Repairer	Enlisted
    // 29F	Fixed Communications Security Equipment Repairer	Enlisted
    // 29G	Digital Communications Equipment Repairer	Enlisted
    // 29H	Automatic Digital Message Switch Equipment (ADMSE) Repairer	Enlisted
    // 29J	Teletypewriter Equipment Repairer	Enlisted
    // 29M	Tactical Satellite/Microwave Repairer	Enlisted
    // 29N	Switching Central Repairer	Enlisted
    // 29P	Communications Security Maintenance Chief	Enlisted
    // 29S	Communications Security Equipment Repairer	Enlisted
    // 29T	Satellite/Microwave Communications Chief	Enlisted
    // 29U	Digital Equipment Maintenance Chief	Enlisted
    // 29V	Microwave Systems Operator/Repairer	Enlisted
    // 29W	Electronics Maintenance Supervisor	Enlisted
    // 29X	Communications Equipment Maintenance Chief	Enlisted
    // 29Y	Satellite Communications (SATCOM) Systems Repairer	Enlisted
    // 29Z	Electronics Maintenance Chief	Enlisted
    // 30A	Information Operations Officer (functional area)	Officer
    // 311A	CID Special Agent	Warrant Officer
    // 31A	Military Police	Officer
    // 31B	Military Police	Enlisted
    // 31C	Radio Operator-Maintainer	Enlisted
    // 31D	CID Special Agent	Enlisted
    // 31D	Mobile Subscriber Equipment Transmission System Operator	Enlisted
    // 31E	Internment/Resettlement Specialist	Enlisted
    // 31F	Network Switching Systems Operator/Maintainer	Enlisted
    // 31G	Tactical Communication Chief	Enlisted
    // 31J	Teletypewriter Repairer	Enlisted
    // 31K	Working Dog Handler	Enlisted
    // 31K	Combat Signaler	Enlisted
    // 31L	Cable Systems Installer-Maintainer	Enlisted
    // 31M	Multichannel Transmission Systems Operator	Enlisted
    // 31N	Communications Systems/Circuit Controller	Enlisted
    // 31P	Microwave Systems Operator-Maintainer	Enlisted
    // 31Q	Tactical Satellite/Microwave Systems Operator	Enlisted
    // 31R	Multichannel Transmission Systems Operator/Maintainer	Enlisted
    // 31S	Satellite Communication Systems Operator-Maintainer	Enlisted
    // 31T	Satellite/Microwave Systems Chief	Enlisted
    // 31U	Signal Support Systems Specialist	Enlisted
    // 31V	Unit Level Communications Maintainer	Enlisted
    // 31W	Telecommunications Operations Chief	Enlisted
    // 31X	Communications Systems/Circuit Control Supervisor Systems	Enlisted
    // 31Y	Telecommunications Systems Supervisor	Enlisted
    // 31Z	Senior Signal Sergeant	Enlisted
    // 32D	Communications Systems Circuit Controller	Enlisted
    // 32E	Fixed Plant Carrier Repairman	Enlisted
    // 32F	Fixed Ciphony Repairer	Enlisted
    // 32G	Fixed Cryptographic Equipment Repairer	Enlisted
    // 32H	Fixed Station Radio Repairer	Enlisted
    // 32Z	Communications-Electronics Maintenance Chief	Enlisted
    // 33B	General Intercept Equipment Repairman	Enlisted
    // 33C	Intercept Receiving Systems Repairman	Enlisted
    // 33D	Intercept Recording Systems Repairman	Enlisted
    // 33F	Demultiplex Systems Repairman	Enlisted
    // 33G	ECM/DF Systems Repairman	Enlisted
    // 33M	Electronic Warfare/Intercept Strategic Systems Analyst	Enlisted
    // 33P	Electronic Warfare Intercept Strategic Receiving Subsystems	Enlisted
    // 33Q	Electronic Warfare/Intercept Strategic Processing/Storage	Enlisted
    // 33R	Electronic Warfare/ Intercept Aviation Systems Repairer	Enlisted
    // 33R	Aviation Systems Repairer	Enlisted
    // 33S	EW/Intercept Systems Repairer	Enlisted
    // 33T	Electronic Warfare/ Intercept Tactical Systems Repairer	Enlisted
    // 33V	Electronic Warfare/Intercept Aerial Sensor Repairer	Enlisted
    // 33W	Military Intelligence Systems Maintainer/Integrator	Enlisted
    // 33Z	Intercept Systems Maintenance Supervisor	Enlisted
    // 33Z	Electronic Warfare/Intercept Systems Maintenance Supervisor	Enlisted
    // 34A	Strategic Intelligence Officer	Officer
    // 34B	Punch Card Machine Repairer	Enlisted
    // 34C	Decentralized Automated Service Support System Computer Repairer	Enlisted
    // 34D	ADPS (Automatic Data Processing Systems) Repairman	Enlisted
    // 34E	NCR 500 Computer Repairer	Enlisted
    // 34F	DSTE Repairer	Enlisted
    // 34G	Fire Control Computer Repairer	Enlisted
    // 34H	ADMSE Repairman	Enlisted
    // 34J	UNIVAC 1004/1005, DCT-9000 System Repairer	Enlisted
    // 34K	IBM 360 Repairer	Enlisted
    // 34L	Field Artillery (FA) Digital Systems Repairer	Enlisted
    // 34M	SDS 920 Equipment Repairman	Enlisted
    // 34T	Tactical Computer Systems Repairer	Enlisted
    // 34Y	Field Artillery Tactical Fire Direction Systems Repairer	Enlisted
    // 34Z	ADPS (Automatic Data Processing Systems) Maintenance Supervisor	Enlisted
    // 350B	All Source Intelligence Technician	Warrant Officer
    // 350D	Imagery Intelligence Technician	Warrant Officer
    // 350F	All Source Intelligence Technician	Warrant Officer
    // 350G	Imagery Intelligence Technician	Warrant Officer
    // 350L	Attache Technician	Warrant Officer
    // 350Z	Attache Technician	Warrant Officer
    // 351B	Counter-intelligence Technician	Warrant Officer
    // 351E	Human Intelligence Collection Technician	Warrant Officer
    // 351L	Counter-intelligence Technician	Warrant Officer
    // 351M	Human Intelligence (HUMINT) Collection Technician	Warrant Officer
    // 351Z	Attache Technician	Warrant Officer
    // 352C	Traffic Analysis Technician	Warrant Officer
    // 352D	Emitter Location/Identification Technician	Warrant Officer
    // 352G	Voice Intercept Technician	Warrant Officer
    // 352H	Morse Intercept Technician	Warrant Officer
    // 352J	Emanations Analysis Technician	Warrant Officer
    // 352K	Non-Morse Intercept Technician	Warrant Officer
    // 352N	Signals Intelligence Analysis Technician	Warrant Officer
    // 352P	Voice Intercept Technician	Warrant Officer
    // 352Q	Communications Interceptor/Locator Technician	Warrant Officer
    // 352R	Emanations Analysis Technician	Warrant Officer
    // 352S	Signals Collector Technician	Warrant Officer
    // 353A	IEW Systems Maintenance Technician	Warrant Officer
    // 353T	IEW Systems Maintenance Technician	Warrant Officer
    // 35A	Land Combat Electronic Missile System Repairer	Enlisted
    // 35B	Electronic Instrument Repairman	Enlisted
    // 35B	Strategic Intelligence	Officer
    // 35B	Land Combat Support Systems (LCSS) Test Specialist	Enlisted
    // 35C	Surveillance Radar Repairer	Enlisted
    // 35C	Imagery Intelligence (IMINT)	Officer
    // 35D	All Source Intelligence	Officer
    // 35D	Air Traffic Control Equipment Repairer	Enlisted
    // 35E	Counter Intelligence	Officer
    // 35E	Radio and Communications Security (COMSEC) Repairer	Enlisted
    // 35F	Human Intelligence (HUMINT)	Officer
    // 35F	Intelligence Analyst	Enlisted
    // 35F	Special Electronic Devices Repairer	Enlisted
    // 35G	Imagery Analyst	Enlisted
    // 35G	Geospatial Intelligence Imagery Analyst	Enlisted
    // 35G	Signals Intelligence/Electronic Warfare (SIGINT/EW)	Officer
    // 35H	Common Ground Station (CGS) Analyst	Enlisted
    // 35H	Test, Measurement, and Diagnostic Equipment (TMDE) Maintenance Sup	Enlisted
    // 35J	Computer/Automation Systems Repair	Enlisted
    // 35K	Apache Attack Helicopter Systems Repairer	Enlisted
    // 35K	Unmanned Aerial Vehicle Operator	Enlisted
    // 35L	Avionic Communications Equipment	Enlisted
    // 35L	Counter Intelligence Agent	Enlisted
    // 35M	Radar Repairer	Enlisted
    // 35M	Human Intelligence Collector	Enlisted
    // 35N	Wire Systems Equipment Repairer	Enlisted
    // 35N	Signals Intelligence Analyst	Enlisted
    // 35P	Multiple Launch Rocket System (MLRS) Repairer	Enlisted
    // 35P	Cryptologic Linguist (Crypto Linguist)	Enlisted
    // 35P	Cryptologic Linguist (Crypto Linguist)	Enlisted
    // 35Q	Avionic Flight Systems Repairer	Enlisted
    // 35Q	Cryptologic Network Warfare Specialist	Enlisted
    // 35R	Avionic System Repairer	Enlisted
    // 35S	PATRIOT System Repairer	Enlisted
    // 35S	Signals Collector/Analyst	Enlisted
    // 35S	Signals Collector/Analyst	Enlisted
    // 35T	Avenger System Repairer	Enlisted
    // 35T	Military Intelligence (MI) Systems Maintainer/Integrator	Enlisted
    // 35T	Military Intelligence (MI) Systems Maintainer/Integrator	Enlisted
    // 35T	Military Intelligence (MI) Systems Maintainer/Integrator	Enlisted
    // 35U	Biomedical Equipment Specialist	Enlisted
    // 35U	Multi Sensor Operator	Enlisted
    // 35V	Signals Intelligence	Enlisted
    // 35V	Electronic and Missile Systems Maintenance Chief	Enlisted
    // 35W	Electronic Maintenance Chief	Enlisted
    // 35X	Intelligence Senior Sergeant/Chief Intelligence Sergeant	Enlisted
    // 35X	Intelligence Senior Sergeant/Chief Intelligence Sergeant	Enlisted
    // 35Y	Integrated Family of Test Equipment Operator/Maintainer	Enlisted
    // 35Y	Chief Counter Intelligence/Human Intelligence Sergeant	Enlisted
    // 35Z	Senior Electronic Maintenance Chief	Enlisted
    // 35Z	Signals Intelligence (Electronic Warfare)/ Senior Sergeant/Chief	Enlisted
    // 36A	Financial Manager	Officer
    // 36B	Financial Management Technician	Enlisted
    // 36C	Wire Systems Installer	Enlisted
    // 36D	Antennaman	Enlisted
    // 36E	Cable Splicer	Enlisted
    // 36G	Manual Central Office Repairman	Enlisted
    // 36H	Dial/Manual Central Office Repairer	Enlisted
    // 36L	Transportable Automatic Switching Systems Operator/Maintainer	Enlisted
    // 36M	Wire Systems Operator	Enlisted
    // 37A	Psychological Operations	Officer
    // 37F	Psychological Operations Specialist	Enlisted
    // 38A	Civil Affairs	Officer
    // 38A	Civil Affairs Specialist (Reserve Components)	Enlisted
    // 38B	Civil Affairs Specialist	Enlisted
    // 38C	Civil Affairs	Officer
    // 39A	PSYOP or CA, General	Officer
    // 39B	Automatic Test Equipment Operator/Maintainer	Enlisted
    // 39B	Psychological Operations	Officer
    // 39C	Target Acquisition/Surveillance Radar Repairer	Enlisted
    // 39C	Civil Affairs	Officer
    // 39D	Decentralized Automated Service Support System	Enlisted
    // 39E	Special Electronic Devices Repairer	Enlisted
    // 39G	Automated Communications Computer Systems Repairer	Enlisted
    // 39K	IBM Automatic Data Processing Systems Repairer	Enlisted
    // 39L	Field Artillery Digital Systems Repairer	Enlisted
    // 39T	Tactical Computer Systems Repairer	Enlisted
    // 39V	Computerized Systems Maintenance Chief	Enlisted
    // 39W	Radar/Special Electronic Devices Maintenance Chief	Enlisted
    // 39X	Electronics Equipment Maintenance Chief	Enlisted
    // 39Y	Field Artillery (FA) Tactical Fire Direction Systems Repairer	Enlisted
    // 40A	Space Operations	Officer
    // 40C	Army Astronauts	Officer
    // 41A	Personnel Programs Management Staff	Officer
    // 41B	Topographic Instrument Repairman	Enlisted
    // 41C	Fire Control Instrument Repairman	Enlisted
    // 41E	Camera Repairman	Enlisted
    // 41F	Projector Repairman	Enlisted
    // 41G	Surveillance Photographic Equipment Repairman	Enlisted
    // 41H	Photographic Equipment Repair Chief	Enlisted
    // 41J	Office Machine Repairman	Enlisted
    // 41K	Reproduction Equipment Repairman	Enlisted
    // 420A	Human Resources Technician	Warrant Officer
    // 420C	Bandmaster	Warrant Officer
    // 42A	Human Resource Specialist	Enlisted
    // 42A	Adjutant General, General	Officer
    // 42C	Army Bands	Officer
    // 42C	Orthotic Specialist	Enlisted
    // 42D	Dental Removal Prosthetic Specialist	Enlisted
    // 42E	Optical Laboratory Specialist	Enlisted
    // 42E	Administrative System Management	Officer
    // 42F	Dental Fixed Prosthetic Specialist	Enlisted
    // 42F	Human Resources Information Systems Management Specialist	Enlisted
    // 42H	Senior Human Resources Officer	Officer
    // 42L	Administrative Specialist	Enlisted
    // 42R	Band Member	Enlisted
    // 42S	Special Band Member	Enlisted
    // 43A	Human Resource Management Officer	Officer
    // 43E	Parachute Rigger	Enlisted
    // 43J	Textile Repairman	Enlisted
    // 43K	Canvas Repairman	Enlisted
    // 43M	Fabric and Leather Repair Foreman	Enlisted
    // 43M	Fabric Repair Specialist	Enlisted
    // 44A	Finance, General	Officer
    // 44B	Metal Body Repairman	Enlisted
    // 44B	Metal Worker	Enlisted
    // 44C	Financial Management Technician	Enlisted
    // 44E	Machinist	Enlisted
    // 45A	Armament Maintenance Apprentice	Enlisted
    // 45A	Comptroller	Officer
    // 45B	Small Arms Repairer	Enlisted
    // 45D	Self-Propelled Field Artillery Turret Mechanic	Enlisted
    // 45E	XM1 Tank Turret Mechanic	Enlisted
    // 45G	Fire Control Repairer	Enlisted
    // 45J	Aircraft Armament Repairman	Enlisted
    // 45K	Armament Repairer	Enlisted
    // 45K	Tank Turret Repairman	Enlisted
    // 45L	Artillery Repairer	Enlisted
    // 45M	Aircraft Armament Subsystem Mechanic	Enlisted
    // 45N	M60A1/A3 Tank Turret Mechanic (RC)	Enlisted
    // 45P	Sheridan Turret Mechanic	Enlisted
    // 45R	Missile Tank Turret Mechanic	Enlisted
    // 45T	Bradley Fighting Vehicle System Turret Mechanic	Enlisted
    // 45Z	Armament Maintenance Supervisor	Enlisted
    // 46A	Public Affairs, General	Officer
    // 46B	Broadcast	Officer
    // 46D	Improved Hawk Mechanical Systems Repairman	Enlisted
    // 46L	Sergeant Electrical-Mechanical Repairman	Enlisted
    // 46N	Pershing Electrical-Mechanical Repairman	Enlisted
    // 46Q	Public Affairs Specialist	Enlisted
    // 46R	Public Affairs Broadcast Specialist	Enlisted
    // 46Z	Chief Public Affairs NCO	Enlisted
    // 47A	USMA, Professor	Officer
    // 47B	USMA Permanent Associate Professor	Officer
    // 47C	USMA, Professor of English	Officer
    // 47D	USMA, Professor of Electrical Engineering and Computer Science	Officer
    // 47E	USMA, Professor of Law	Officer
    // 47F	USMA, Professor of Systems Engineering	Officer
    // 47G	USMA, Professor of Foreign Languages	Officer
    // 47H	USMA, Professor Physics	Officer
    // 47J	USMA, Professor of Social Sciences	Officer
    // 47K	USMA, Professor of History	Officer
    // 47L	USMA, Professor of Behavioral Sciences and Leadership	Officer
    // 47M	USMA, Professor of Chemistry	Officer
    // 47N	USMA, Professor of Mathematical Sciences	Officer
    // 47P	USMA, Professor Geography and Environmental Engineering	Officer
    // 47Q	USMA, Professor and Associate Dean	Officer
    // 47R	USMA, Professor of Civil and Mechanical Engineering	Officer
    // 47S	USMA, Professor of Physical Education	Officer
    // 47T	USMA, Professor of Leader Development and Organizational Learning	Officer
    // 47U	USMA, Professor of Military Art and Science	Officer
    // 48B	Latin America	Officer
    // 48C	Europe (Foreign Area Officer)	Officer
    // 48D	South Asia (Foreign Area Officer)	Officer
    // 48E	Eurasia (Foreign Area Officer)	Officer
    // 48F	China (Foreign Area Officer)	Officer
    // 48G	Mideast/North Africa (Foreign Area Officer)	Officer
    // 48H	Northeast Asia (Foreign Area Officer)	Officer
    // 48I	Southeast Asia (Foreign Area Officer)	Officer
    // 48J	Africa, South of the Sahara (Foreign Area Officer)	Officer
    // 49A	Operations Research/Systems Analysis	Officer
    // 49B	Operations Research, Personnel	Officer
    // 49C	Operations Research, Combat Operations/Materiel Systems	Officer
    // 49D	Operations Research, Planning, Programming, and Resource	Officer
    // 49E	Operations Research, Test, and Evaluation	Officer
    // 50A	Force Development	Officer
    // 51A	Systems Development	Officer
    // 51A	Construction and Utilities Worker	Enlisted
    // 51B	Carpenter	Enlisted
    // 51B	Carpentry and Masonry Specialist	Enlisted
    // 51C	Structures Specialist	Enlisted
    // 51C	Acquisition, Logistics & Technology (AL&T) Contracting NCO	Enlisted
    // 51C	Contract and Industrial Management	Officer
    // 51D	Mason	Enlisted
    // 51D	Acquisition	Officer
    // 51E	Camouflage Specialist	Enlisted
    // 51F	Pipeline Specialist	Enlisted
    // 51G	Soils Analyst	Enlisted
    // 51G	Materials Quality Specialist	Enlisted
    // 51H	Construction Foreman	Enlisted
    // 51H	Construction Engineering Supervisor	Enlisted
    // 51J	Heating and Ventilating Specialist	Enlisted
    // 51K	Plumber	Enlisted
    // 51L	Heating and Cooling Specialist	Enlisted
    // 51M	Firefighter	Enlisted
    // 51N	Water Supply Specialist	Enlisted
    // 51P	Utilities Foreman	Enlisted
    // 51Q	Terrain Analyst	Enlisted
    // 51R	Systems Automation Acquisition and Engineering	Officer
    // 51R	Interior Electrician	Enlisted
    // 51R	Electrician	Enlisted
    // 51S	Research and Engineering	Officer
    // 51T	Test and Evaluations	Officer
    // 51T	Technical Engineering Supervisor	Enlisted
    // 51Z	Acquisition	Officer
    // 51Z	General Engineering Supervisor	Enlisted
    // 52B	Nuclear and Counter-Proliferation	Officer
    // 52B	Power Generation Equipment Operator/Mechanic	Enlisted
    // 52C	Utilities Equipment Repairer	Enlisted
    // 52C	Power Pack Specialist	Enlisted
    // 52D	Power Generation Equipment Repairman	Enlisted
    // 52E	Power Station Operator	Enlisted
    // 52E	Prime Power Production Specialist	Enlisted
    // 52F	Turbine Engine Driven Generator Repairer	Enlisted
    // 52G	Transmission and Distribution Specialist (RC)	Enlisted
    // 52H	Nuclear Power Plant Mechanic or Operator	Enlisted
    // 52J	Nuclear Power Plant Electrician or Operator	Enlisted
    // 52K	Nuclear Power Plant Instrumentman or Operator	Enlisted
    // 52L	Nuclear Power Plant Process Control Specialist or Operator	Enlisted
    // 52M	Nuclear Power Plant Chief	Enlisted
    // 52X	Special Purpose Equipment Repairer	Enlisted
    // 53A	Information Systems Management	Officer
    // 53B	Oxygen-Acetylene Production Specialist	Enlisted
    // 53B	Systems Automation Engineering	Officer
    // 53C	Carbon Dioxide-Hydrogen Production Specialist	Enlisted
    // 53C	Systems Automation Acquisition	Officer
    // 54A	Chemical Operations Assistant	Enlisted
    // 54B	Chemical Operations Specialist	Enlisted
    // 54C	Smoke and Flame Specialist	Enlisted
    // 54D	Chemical Equipment Repairman	Enlisted
    // 54E	Chemical Staff Specialist	Enlisted
    // 54Z	Chemical Senior Sergeant	Enlisted
    // 550A	Legal Administrator	Warrant Officer
    // 55A	Ammunition Apprentice	Enlisted
    // 55A	Judge Advocate, General	Officer
    // 55B	Ammunition Specialist	Enlisted
    // 55B	Military Judge	Officer
    // 55C	Ammunition Renovation Specialist	Enlisted
    // 55D	Explosive Ordnance Disposal Specialist	Enlisted
    // 55G	Nuclear Weapons Maintenance Specialist	Enlisted
    // 55R	Ammunition Stock Control and Accounting Specialist	Enlisted
    // 55X	Ammunition Inspector	Enlisted
    // 55Z	Ammunition Supervisor	Enlisted
    // 56A	Command and Unit Chaplain	Officer
    // 56D	Clinical Pastoral Educator	Officer
    // 56M	Chaplain Assistant	Enlisted
    // 57A	Simulation Operations Officer	Officer
    // 57D	Sawyer	Enlisted
    // 57E	Laundry and Bath Specialist	Enlisted
    // 57F	Memorial Activities Specialist	Enlisted
    // 57F	Graves Registration Specialist	Enlisted
    // 57G	Duty Foreman	Enlisted
    // 57H	Cargo Handler	Enlisted
    // 57H	Terminal Operations Specialist	Enlisted
    // 59A	Strategic Plans and Policy	Officer
    // 600A	Physician Assistant	Warrant Officer
    // 60A	Operational Medicine	Officer
    // 60B	Nuclear Medicine Officer	Officer
    // 60C	Preventive Medicine Officer	Officer
    // 60D	Occupational Medicine Officer	Officer
    // 60F	Pulmonary Disease/Critical Care Officer	Officer
    // 60G	Gastroenterologist	Officer
    // 60H	Cardiologist	Officer
    // 60J	Obstetrician and Gynecologist	Officer
    // 60K	Urologist	Officer
    // 60L	Dermatologist	Officer
    // 60M	Allergist, Clinical Immunologist	Officer
    // 60N	Anesthesiologist	Officer
    // 60P	Pediatrician	Officer
    // 60Q	Pediatric Sub-specialist	Officer
    // 60R	Child Neurologist	Officer
    // 60S	Ophthalmologist	Officer
    // 60T	Otolaryngologist	Officer
    // 60U	Child Psychiatrist	Officer
    // 60V	Neurologist	Officer
    // 60W	Psychiatrist	Officer
    // 61A	Nephrologist	Officer
    // 61B	Medical Oncologist/Hematologist	Officer
    // 61B	Watercraft Operator	Enlisted
    // 61C	Endocrinologist	Officer
    // 61C	Marine Engineer	Enlisted
    // 61D	Rheumatologist	Officer
    // 61E	Clinical Pharmacologist	Officer
    // 61F	Internist	Officer
    // 61F	Marine Hull Repairer	Enlisted
    // 61G	Infectious Disease Officer	Officer
    // 61H	Family Medicine	Officer
    // 61J	General Surgeon	Officer
    // 61K	Thoracic Surgeon	Officer
    // 61L	Plastic Surgeon	Officer
    // 61M	Orthopedic Surgeon	Officer
    // 61N	Flight Surgeon	Officer
    // 61P	Physiatrist	Officer
    // 61R	Diagnostic Radiologist	Officer
    // 61U	Pathologist	Officer
    // 61W	Peripheral Vascular Surgeon	Officer
    // 61Z	Neurosurgeon	Officer
    // 61Z	Marine Senior Sergeant	Enlisted
    // 62A	Emergency Physician	Officer
    // 62B	Field Surgeon	Officer
    // 62B	Construction Equipment Repairer	Enlisted
    // 62C	Engineer Missile Equipment Specialist	Enlisted
    // 62D	Asphalt Equipment Operator	Enlisted
    // 62E	Heavy Construction Equipment Operator	Enlisted
    // 62F	Crane Operator	Enlisted
    // 62G	Quarryman	Enlisted
    // 62G	Quarrying Specialist	Enlisted
    // 62H	Concrete Paving Equipment Operator	Enlisted
    // 62H	Concrete and Asphalt Equipment Operator	Enlisted
    // 62J	General Construction Machine Operator	Enlisted
    // 62J	General Construction Equipment Operator	Enlisted
    // 62K	Grader Operator	Enlisted
    // 62L	Wheeled Tractor Operator	Enlisted
    // 62M	Rough Terrain Forklift and Loader Operator	Enlisted
    // 62N	Construction Machine Supervisor	Enlisted
    // 62N	Construction Equipment Supervisor	Enlisted
    // 63A	General Dentist	Officer
    // 63A	M1 Abrams Tank System Maintainer	Enlisted
    // 63B	Comprehensive Dentist	Officer
    // 63B	Wheel Vehicle Mechanic	Enlisted
    // 63C	Track Vehicle Mechanic	Enlisted
    // 63D	Periodontist	Officer
    // 63D	Self-Propelled Field Artillery System Mechanic	Enlisted
    // 63D	Artillery Mechanic	Enlisted
    // 63E	Endodontist	Officer
    // 63E	M1 Abrams Tank System Mechanic	Enlisted
    // 63F	Prosthodontist	Officer
    // 63F	Recovery Specialist	Enlisted
    // 63G	Fuel and Electrical Systems Repairer	Enlisted
    // 63H	Public Health Dentist	Officer
    // 63H	Track Vehicle Repairer	Enlisted
    // 63H	Automotive Repairman	Enlisted
    // 63J	Quartermaster Equipment Repairman	Enlisted
    // 63J	Quartermaster and Chemical Equipment Repairer	Enlisted
    // 63K	Pediatric Dentist	Officer
    // 63M	Orthodontist	Officer
    // 63M	Bradley Fighting Vehicle System Maintainer	Enlisted
    // 63N	Oral and Maxillofacial Surgeon	Officer
    // 63N	M60A1/A3 Tank System Mechanic	Enlisted
    // 63P	Oral Pathologist	Officer
    // 63R	Executive Dentist	Officer
    // 63R	M60A2 Tank System Mechanic	Enlisted
    // 63S	Heavy Wheel Vehicle Mechanic	Enlisted
    // 63T	ITV/IFV/CFV System Mechanic	Enlisted
    // 63T	Bradley Fighting Vehicle System Mechanic	Enlisted
    // 63W	Wheel Vehicle Repairer	Enlisted
    // 63X	Maintenance Supervisor	Enlisted
    // 63Y	Track Vehicle Mechanic	Enlisted
    // 63Z	Mechanical Maintenance Supervisor	Enlisted
    // 640A	Food Safety Officer	Warrant Officer
    // 64A	Field Veterinary Service	Officer
    // 64B	Veterinary Preventive Medicine	Officer
    // 64C	Veterinary Laboratory Animal Medicine	Officer
    // 64C	Motor Transport Operator	Enlisted
    // 64D	Veterinary Pathology	Officer
    // 64E	Veterinary Comparative Medicine	Officer
    // 64F	Veterinary Clinical Medicine	Officer
    // 64Z	Senior Veterinarian (Immaterial)	Officer
    // 64Z	Transportation Senior Sergeant	Enlisted
    // 65A	Occupational Therapy	Officer
    // 65B	Physical Therapy	Officer
    // 65B	Locomotive Repairer	Enlisted
    // 65C	Dietitian	Officer
    // 65D	Physician Assistant	Officer
    // 65D	Railway Car Repairer	Enlisted
    // 65E	Airbrake Repairer	Enlisted
    // 65F	Locomotive Electrician	Enlisted
    // 65G	Railway Section Repairer	Enlisted
    // 65H	Locomotive Operator	Enlisted
    // 65J	Trainman	Enlisted
    // 65K	Railway Movement Coordinator	Enlisted
    // 65X	Specialist Allied Operations	Officer
    // 65Z	Railway Senior Sergeant	Enlisted
    // 66B	Army Public Health Nurse	Officer
    // 66B	Army Public Health Nurse	Officer
    // 66C	Psychiatric/Mental Health Nurse	Officer
    // 66C	Psychiatric/Behavioral Health Nurse	Officer
    // 66E	Perioperative Nurse	Officer
    // 66E	Perioperative Nurse	Officer
    // 66F	Nurse Anesthetist	Officer
    // 66F	Nurse Anesthetist	Officer
    // 66G	Obstetric and Gynecologic Nurse	Officer
    // 66G	Obstetric and Gynecologic Nurse	Officer
    // 66G	Obstetric and Gynecologic Nurse	Officer
    // 66H	Medical-Surgical Nurse	Officer
    // 66H	Observation Airplane Technical Inspector	Enlisted
    // 66H	Medical-Surgical Nurse	Officer
    // 66J	Aircraft Armament Technical Inspector	Enlisted
    // 66N	Operational Nursing	Officer
    // 66N	Utility Helicopter Technical Inspector	Enlisted
    // 66N	Operational Nursing	Officer
    // 66P	Family Nurse Practitioner	Officer
    // 66P	Family Nurse Practitioner	Officer
    // 66R	AH-64 Attack Helicopter Technical Inspector	Enlisted
    // 66R	Psychiatric/Behavioral Health Nurse Practitioner	Officer
    // 66S	Scout Helicopter Technical Inspector	Enlisted
    // 66T	Tactical Transport Helicopter Technical Inspector	Enlisted
    // 66U	Medium Helicopter Technical Inspector	Enlisted
    // 66V	Observation/Scout Helicopter Technical Inspector	Enlisted
    // 66X	Heavy Lift Helicopter Technical Inspector	Enlisted
    // 66Y	AH-1 Attack Helicopter Technical Inspector	Enlisted
    // 670A	Health Services Maintenance Technician	Warrant Officer
    // 67A	Health Services	Officer
    // 67B	Laboratory Sciences	Officer
    // 67B	O-1/U-6 Airplane Repairman	Enlisted
    // 67C	Preventive Medicine Sciences	Officer
    // 67C	U-1A Airplane Repairman	Enlisted
    // 67D	Behavioral Sciences	Officer
    // 67E	Pharmacy	Officer
    // 67F	Optometry	Officer
    // 67F	Optometry	Officer
    // 67F	Airplane Technical Inspector	Enlisted
    // 67G	Podiatry	Officer
    // 67G	U-8/U-21 Airplane Repairman	Enlisted
    // 67G	Utility Airplane Repairer (RC)	Enlisted
    // 67H	Observation Airplane Repairer	Enlisted
    // 67H	OV-1 Airplane Repairman	Enlisted
    // 67J	Aeromedical Evacuation	Officer
    // 67N	UH-1 Helicopter Repairman	Enlisted
    // 67R	AH-64 Attack Helicopter Repairer	Enlisted
    // 67S	OH-58D Helicopter Repairer	Enlisted
    // 67T	UH-60 Helicopter Repairer	Enlisted
    // 67U	CH-47 Helicopter Repairman	Enlisted
    // 67V	OH-6/OH-58 Helicopter Repairman	Enlisted
    // 67W	Helicopter Technical Inspector	Enlisted
    // 67X	CH-54 Helicopter Repairman	Enlisted
    // 67Y	AH-1G Helicopter Repairman	Enlisted
    // 67Y	AH-1 Attack Helicopter Repairer	Enlisted
    // 67Z	Aircraft Maintenance Senior Sergeant	Enlisted
    // 68A	Biomedical Equipment Specialist	Enlisted
    // 68B	Aircraft Powerplant Repairer	Enlisted
    // 68B	Aircraft Turbine Engine Repairman	Enlisted
    // 68B	Orthopedic Specialist	Enlisted
    // 68C	Practical Nursing Specialist	Enlisted
    // 68D	Aircraft Powertrain Repairman	Enlisted
    // 68D	Operating Room Specialist	Enlisted
    // 68E	Aircraft Rotor and Propeller Repairman	Enlisted
    // 68E	Dental Specialist	Enlisted
    // 68F	Physical Therapy Specialist	Enlisted
    // 68F	Aircraft Electrician	Enlisted
    // 68G	Patient Administration Specialist	Enlisted
    // 68G	Airframe Repairman	Enlisted
    // 68G	Aircraft Structural Repairer	Enlisted
    // 68H	Aircraft Pneudraulics Repairer	Enlisted
    // 68H	Optical Laboratory Specialist	Enlisted
    // 68H	Aircraft Hydraulics Repairman	Enlisted
    // 68J	Aircraft Armament/Missile Systems Repairer	Enlisted
    // 68J	Medical Logistics Specialist	Enlisted
    // 68J	Helicopter Missile Systems Repairer	Enlisted
    // 68K	Aircraft Components Repair Supervisor	Enlisted
    // 68K	Medical Laboratory Specialist	Enlisted
    // 68L	Occupational Therapy Specialist	Enlisted
    // 68L	Avionic Communications Equipment Repairer	Enlisted
    // 68M	Helicopter Weapon System Repairer	Enlisted
    // 68M	Nutrition Care Specialist	Enlisted
    // 68M	Aircraft Weapon Systems Repairer	Enlisted
    // 68N	Avionic Mechanic	Enlisted
    // 68N	Cardiovascular Specialist	Enlisted
    // 68P	Avionic Maintenance Supervisor	Enlisted
    // 68P	Radiology Specialist	Enlisted
    // 68Q	Pharmacy Specialist	Enlisted
    // 68R	Avionic Radar Repairer	Enlisted
    // 68R	Veterinary Food Inspection Specialist	Enlisted
    // 68R	Veterinary Food Inspection Specialist	Enlisted
    // 68S	OH-58D Armament/Electrical/Avionics Systems Repairer	Enlisted
    // 68S	Preventive Medicine Specialist	Enlisted
    // 68T	Animal Care Specialist	Enlisted
    // 68U	Ear, Nose, and Throat (ENT) Specialist	Enlisted
    // 68V	Respiratory Specialist	Enlisted
    // 68W	Health Care Specialist	Enlisted
    // 68W	Health Care Specialist	Enlisted
    // 68X	Behavioral Health Specialist	Enlisted
    // 68X	Mental Health Specialist	Enlisted
    // 68X	AH-64A Armament/Electrical Systems Repairer	Enlisted
    // 68Y	Eye Specialist	Enlisted
    // 68Y	AH-64D Armament/Electrical/Avionic Systems Repairer	Enlisted
    // 68Z	Chief Medical NCO	Enlisted
    // 70A	Health Care Administration	Officer
    // 70B	Health Services Administration	Officer
    // 70C	Health Services Comptroller	Officer
    // 70D	Health Services Systems Management	Officer
    // 70E	Patient Administration	Officer
    // 70F	Health Services Human Resources	Officer
    // 70H	Health Services Plans, Ops, Intelligence, Security,& Training	Officer
    // 70K	Health Services Materiel	Officer
    // 71A	Microbiology	Officer
    // 71B	Biochemistry	Officer
    // 71C	Stenographer	Enlisted
    // 71C	Executive Administrative Assistant	Enlisted
    // 71C	Parasitology	Officer
    // 71D	Legal Clerk	Enlisted
    // 71D	Legal Specialist	Enlisted
    // 71D	Immunology	Officer
    // 71E	Court Reporter	Enlisted
    // 71E	Clinical Laboratory	Officer
    // 71F	Postal Clerk	Enlisted
    // 71F	Research Psychology	Officer
    // 71G	Patient Administration Specialist	Enlisted
    // 71L	Administrative Specialist	Enlisted
    // 71N	Traffic Management Coordinator	Enlisted
    // 71P	Flight Operations Coordinator	Enlisted
    // 71Q	Journalist	Enlisted
    // 71R	Broadcast Specialist	Enlisted
    // 71R	Broadcast Journalist	Enlisted
    // 71S	Attache Specialist	Enlisted
    // 71S	Attaché Specialist	Enlisted
    // 71U	Card and Tape Writer	Enlisted
    // 72A	Nuclear Medical Science	Officer
    // 72B	Communications Center Specialist	Enlisted
    // 72B	Entomology	Officer
    // 72C	Central Office Switchboard Operator	Enlisted
    // 72C	Audiology	Officer
    // 72D	Environmental Science and Engineering	Officer
    // 72E	Telecommunications Center Specialist	Enlisted
    // 72E	Environmental Engineer	Officer
    // 72F	Data Communications Terminal Specialist	Enlisted
    // 72G	Data Communications Switching Center Specialist	Enlisted
    // 72H	Central Office Operations Specialist	Enlisted
    // 72H	Central Office Operations Operator	Enlisted
    // 73A	Social Work	Officer
    // 73B	Clinical Psychology	Officer
    // 73C	Finance Specialist	Enlisted
    // 73D	Accounting Specialist	Enlisted
    // 73Z	Finance Senior Sergeant	Enlisted
    // 740A	Chemical, Biological, Radiological and Nuclear (CBRN)	Warrant Officer
    // 74A	CBRN	Officer
    // 74B	Chemical Operations and Training	Officer
    // 74B	Information Systems Operator-Analyst	Enlisted
    // 74C	Record Telecommunications Operator/Maintainer	Enlisted
    // 74C	Chemical Munitions and Materiel Management	Officer
    // 74D	Chemical, Biological, Radiological and Nuclear (CBRN) Specialist	Enlisted
    // 74D	Information Systems Operator	Enlisted
    // 74E	Computer Systems Operator	Enlisted
    // 74F	Computer Programmer	Enlisted
    // 74F	Programmer/Analyst	Enlisted
    // 74G	Telecommunications Computer Operator-Maintainer	Enlisted
    // 74Z	Information Systems Chief	Enlisted
    // 75A	Field Veterinary Service	Officer
    // 75B	Personnel Administration Specialist	Enlisted
    // 75B	Veterinary Preventive Medicine	Officer
    // 75C	Personnel Management Specialist	Enlisted
    // 75C	Veterinary Laboratory Animal Medicine	Officer
    // 75D	Personnel Records Specialist	Enlisted
    // 75D	Veterinary Pathology	Officer
    // 75E	Personnel Actions Specialist	Enlisted
    // 75E	Veterinary Pathology	Officer
    // 75E	Veterinary Comparative Medicine	Officer
    // 75F	Personnel Information System Management Specialist	Enlisted
    // 75F	Veterinary Clinical Medicine	Officer
    // 75H	Personnel Services Specialist	Enlisted
    // 75Z	Personnel Sergeant	Enlisted
    // 76A	Supplyman	Enlisted
    // 76C	Equipment Records and Parts Specialist	Enlisted
    // 76D	Materiel Supply Specialist	Enlisted
    // 76J	Medical Supply Specialist	Enlisted
    // 76J	Medical Supplyman	Enlisted
    // 76N	Procurement Sergeant	Enlisted
    // 76P	Stock Control Supplyman	Enlisted
    // 76Q	Special Purpose Materiel Supply Specialist	Enlisted
    // 76R	Weapons Material Supply Specialist	Enlisted
    // 76S	Vehicle Materiel Supply Specialist	Enlisted
    // 76T	Aircraft Materiel Supply Specialist	Enlisted
    // 76U	Communications Electronics (COMMEL) Materiel Supply Specialist	Enlisted
    // 76V	Storage Supplyman	Enlisted
    // 76W	Petroleum Supply Specialist	Enlisted
    // 76X	Subsistence Supplyman	Enlisted
    // 76Y	Unit Supply Specialist	Enlisted
    // 76Z	Senior Supply Sergeant	Enlisted
    // 77F	Petroleum Supply Specialist	Enlisted
    // 77L	Petroleum Laboratory Specialist	Enlisted
    // 77W	Water Treatment Specialist	Enlisted
    // 79D	Reenlistment NCO	Enlisted
    // 79R	Recruiter	Enlisted
    // 79T	Recruiting and Retention NCO (Army National Guard)	Enlisted
    // 79V	Army Reserve Career Counselor (Army Reserve)	Enlisted
    // 81A	General Draftsman	Enlisted
    // 81B	Construction Draftsman	Enlisted
    // 81B	Technical Drafting Specialist	Enlisted
    // 81C	Cartographer	Enlisted
    // 81C	Cartographic Specialist	Enlisted
    // 81E	Illustrator	Enlisted
    // 81L	Lithographer	Enlisted
    // 81Q	Terrain Intelligence Analyst	Enlisted
    // 81Q	Terrain Analyst	Enlisted
    // 81T	Topographic Analyst	Enlisted
    // 81Z	Topographic Engineering Supervisor	Enlisted
    // 82A	Rodman and Tapeman	Enlisted
    // 82B	Construction Surveyor	Enlisted
    // 82C	Artillery Surveyor	Enlisted
    // 82D	Topographic Surveyor	Enlisted
    // 82E	Topographic Computer	Enlisted
    // 83D	Process Photographer	Enlisted
    // 83E	Platemaker	Enlisted
    // 83E	Photo and Layout Specialist	Enlisted
    // 83F	Offset Pressman	Enlisted
    // 83F	Printing and Bindery Specialist	Enlisted
    // 83Z	Photolithography Chief	Enlisted
    // 84B	Still Photographer	Enlisted
    // 84B	Still Photographic Specialist	Enlisted
    // 84C	Motion Picture Photographer	Enlisted
    // 84D	Audio Specialist	Enlisted
    // 84E	TV Cameraman	Enlisted
    // 84F	TV Production Specialist	Enlisted
    // 84G	Photographic Laboratory Specialist	Enlisted
    // 84T	TV/Radio Broadcast Operations Chief	Enlisted
    // 84Z	Public Affairs/Audio Visual Chief	Enlisted
    // 880A	Marine Deck Officer	Warrant Officer
    // 881A	Marine Engineering Officer	Warrant Officer
    // 882A	Mobility Officer	Warrant Officer
    // 88A	Transportation, General	Officer
    // 88B	Traffic Management	Officer
    // 88C	Marine and Terminal Operations	Officer
    // 88D	Motor/Rail Transportation	Officer
    // 88H	Cargo Specialist	Enlisted
    // 88K	Watercraft Operator	Enlisted
    // 88L	Watercraft Engineer	Enlisted
    // 88M	Motor Transport Operator	Enlisted
    // 88N	Transportation Management Coordinator	Enlisted
    // 88P	Railway Equipment Repairer (RC)	Enlisted
    // 88Q	Railway Car Repairer	Enlisted
    // 88R	Airbrake Repairer	Enlisted
    // 88S	Locomotive Electrician	Enlisted
    // 88T	Railway Section Repairer (RC)	Enlisted
    // 88U	Railway Operations Crewmember (RC)	Enlisted
    // 88V	Train Crew Member	Enlisted
    // 88W	Railway Movement Coordinator	Enlisted
    // 88X	Railway Senior Sergeant	Enlisted
    // 88Y	Marine Senior Sergeant	Enlisted
    // 88Z	Transportation Senior Sergeant	Enlisted
    // 890A	Ammunition Warrant Officer	Warrant Officer
    // 89A	Ammunition Stock Control and Accounting Specialist	Enlisted
    // 89B	Ammunition Specialist	Enlisted
    // 89D	Explosive Ordnance Disposal Specialist	Enlisted
    // 89E	Explosive Ordnance Disposal	Officer
    // 90A	Logistics	Officer
    // 910A	Ammunition Warrant Officer	Warrant Officer
    // 911A	Nuclear Weapons Technician	Warrant Officer
    // 912A	Land Combat Missile Systems Technician	Warrant Officer
    // 912A	Land Combat Missile Systems Repair Technician	Warrant Officer
    // 913A	Armament Systems Maintenance Warrant Officer	Warrant Officer
    // 914A	Allied Trades Warrant Officer	Warrant Officer
    // 915A	Automotive Maintenance Warrant Officer	Warrant Officer
    // 915E	Senior Automotive Maintenance Warrant Officer/Senior Ordnance	Warrant Officer
    // 916A	High-to-Medium Air Defense (HIMAD) Direct Support/General	Warrant Officer
    // 917A	Maneuver Forces Air Defense Systems (MFADS) Technician	Warrant Officer
    // 918A	TMDE Maintenance Support Technician	Warrant Officer
    // 918B	Electronic Systems Maintenance Technician	Warrant Officer
    // 918E	Senior Electronics Maintenance Warrant Officer	Warrant Officer
    // 919A	Engineer Equipment Maintenance Warrant Officer	Warrant Officer
    // 91A	Ordnance, General	Officer
    // 91A	Medical Equipment Repairer	Enlisted
    // 91A	Medical Equipment Repairer	Enlisted
    // 91B	Medical Specialist	Enlisted
    // 91B	Wheeled Vehicle Mechanic	Enlisted
    // 91B	Maintenance Management	Officer
    // 91C	Practical Nurse	Enlisted
    // 91C	Utilities Equipment Repairer	Enlisted
    // 91D	Munitions Materiel Management	Officer
    // 91D	Operating Room Specialist	Enlisted
    // 91D	CID Special Agent	Enlisted
    // 91D	Power Generation Equipment Repairer	Enlisted
    // 91E	Dental Specialist	Enlisted
    // 91E	Explosive Ordnance Disposal	Officer
    // 91E	Allied Trades Specialist	Enlisted
    // 91F	Psychiatric Specialist	Enlisted
    // 91F	Small Arms/Artillery Repairer (Small Arms/Arty Rep)	Enlisted
    // 91F	Small Arms/Artillery Repairer	Enlisted
    // 91G	Behavioral Science Specialist	Enlisted
    // 91G	Patient Administration Specialist	Enlisted
    // 91G	Fire Control Repairer	Enlisted
    // 91H	Optical Laboratory Specialist	Enlisted
    // 91H	Track Vehicle Repairer	Enlisted
    // 91J	Physical Therapy Specialist	Enlisted
    // 91J	Quartermaster and Chemical Equipment Repairer	Enlisted
    // 91J	Medical Logistics Specialist	Enlisted
    // 91K	Medical Laboratory Specialist	Enlisted
    // 91K	Armament Repairer	Enlisted
    // 91L	Construction Equipment Repairer	Enlisted
    // 91M	Hospital Food Service Specialist	Enlisted
    // 91M	Bradley Fighting Vehicle System Maintainer	Enlisted
    // 91M	Nutrition Care Specialist	Enlisted
    // 91N	Cardiac Specialist	Enlisted
    // 91P	Radiology Specialist	Enlisted
    // 91P	Self Propelled Artillery Systems Maintainer	Enlisted
    // 91P	Artillery Mechanic	Enlisted
    // 91Q	Pharmacy Specialist	Enlisted
    // 91R	Veterinary Food Inspection Specialist	Enlisted
    // 91S	Preventive Medicine Specialist	Enlisted
    // 91S	Stryker Systems Maintainer	Enlisted
    // 91T	Animal Care Specialist	Enlisted
    // 91U	Ear, Nose, & Throat (ENT) Specialist	Enlisted
    // 91V	Respiratory Specialist	Enlisted
    // 91W	Metal Worker	Enlisted
    // 91W	Health Care Specialist	Enlisted
    // 91X	Maintenance Supervisor	Enlisted
    // 91X	Maintenance Supervisor (Maint Supv)	Enlisted
    // 91X	Mental Health Specialist	Enlisted
    // 91Y	Eye Specialist	Enlisted
    // 91Z	Medical Senior Sergeant	Enlisted
    // 91Z	Chief Medical NCO	Enlisted
    // 91Z	Senior Maintenance Supervisor	Enlisted
    // 91Z	Senior Maintenance Supervisor	Enlisted
    // 920A	Property Accounting Technician	Warrant Officer
    // 920B	Supply Systems Technician	Warrant Officer
    // 921A	Airdrop Systems Technician	Warrant Officer
    // 922A	Food Service Technician	Warrant Officer
    // 923A	Petroleum Systems Technician	Warrant Officer
    // 92A	Automated Logistical Specialist	Enlisted
    // 92A	Quartermaster, General	Officer
    // 92B	Medical Laboratory Specialist	Enlisted
    // 92C	Petroleum Laboratory Specialist	Enlisted
    // 92D	Aerial Delivery and Materiel	Officer
    // 92E	Cytology Specialist	Enlisted
    // 92F	Petroleum and Water	Officer
    // 92F	Petroleum Supply Specialist	Enlisted
    // 92G	Food Service Specialist	Enlisted
    // 92L	Petroleum Laboratory Specialist	Enlisted
    // 92M	Mortuary Affairs Specialist	Enlisted
    // 92R	Parachute Rigger	Enlisted
    // 92S	Shower/Laundry and Clothing Repair Specialist	Enlisted
    // 92W	Water Treatment Specialist	Enlisted
    // 92Y	Unit Supply Specialist	Enlisted
    // 92Z	Senior Noncommissioned Logistician	Enlisted
    // 93B	Aeroscout Observer	Enlisted
    // 93C	Air Traffic Control (ATC) Operator	Enlisted
    // 93D	Air Traffic Control Systems, Subsystems and Equipment Repairer	Enlisted
    // 93E	Meteorological Observer	Enlisted
    // 93F	Ballistic Meteorology Crewman	Enlisted
    // 93F	Field Artillery Meteorological Crewmember	Enlisted
    // 93H	Air Traffic Control (ATC) Tower Operator	Enlisted
    // 93J	ATC (Air Traffic Control) Radar Controller	Enlisted
    // 93P	Flight Operations Coordinator	Enlisted
    // 93P	Aviation Operations Specialist	Enlisted
    // 948B	Electronic Systems Maintenance Warrant Officer	Warrant Officer
    // 948D	Electronic Missile Systems Maintenance Warrant Officer	Warrant Officer
    // 948E	Senior Electronics Maintenance Warrant Officer	Warrant Officer
    // 94A	Land Combat Electronic Missile System Repairer	Enlisted
    // 94B	Food Service Specialist	Enlisted
    // 94D	Air Traffic Control Equipment Repairer	Enlisted
    // 94E	Radio and Communications Security (COMSEC) Repairer	Enlisted
    // 94F	Hospital Food Service Specialist	Enlisted
    // 94F	Computer Detection Systems Repairer	Enlisted
    // 94H	Test, Measurement, and Diagnostic Equipment Support Specialist	Enlisted
    // 94K	Apache Attack Helicopter Systems Repairer	Enlisted
    // 94L	Avionic Communications Equipment Repairer	Enlisted
    // 94M	Radar Repairer	Enlisted
    // 94P	Multiple Launch Rocket System (MLRS) Repairer	Enlisted
    // 94R	Avionic and Survivability Equipment Repairer	Enlisted
    // 94S	Patriot System Repairer	Enlisted
    // 94T	Avenger System Repairer	Enlisted
    // 94V	Electronic and Missile Systems Maintenance Chief	Enlisted
    // 94W	Electronic Maintenance Chief	Enlisted
    // 94X	Senior Missile Systems Maintainer	Enlisted
    // 94Y	Integrated Family of Test Equipment Operator/Maintainer	Enlisted
    // 94Z	Senior Electronic Maintenance Chief	Enlisted
    // 95B	Military Policeman	Enlisted
    // 95C	Correctional Specialist	Enlisted
    // 95D	Assistant Special Agent	Enlisted
    // 95D	CID Special Agent	Enlisted
    // 96B	Intelligence Analyst	Enlisted
    // 96D	Image Interpreter	Enlisted
    // 96D	Imagery Analyst	Enlisted
    // 96F	Psychological Operations Specialist	Enlisted
    // 96H	Imagery Ground Station Operator	Enlisted
    // 96H	Common Ground Station (CGS) Operator	Enlisted
    // 96R	Ground Surveillance Systems Operator	Enlisted
    // 96U	Unmanned Aerial Vehicle Operator	Enlisted
    // 96Z	Intelligence Senior Sergeant	Enlisted
    // 97A	Contracting and Industrial Management Officer	Officer
    // 97B	Counterintelligence Agent	Enlisted
    // 97C	Area Intelligence Specialist	Enlisted
    // 97D	Military Intelligence Coordinator	Enlisted
    // 97E	Interrogator	Enlisted
    // 97E	Human Intelligence Collector	Enlisted
    // 97G	Multi-Discipline Counter-Intelligence (MDCI) Operator/Analyst	Enlisted
    // 97L	Translator/Interpreter (Reserve Components)	Enlisted
    // 97Z	Counterintelligence/Human Intelligence Senior Sergeant	Enlisted
    // 98C	EW/Signal Intelligence Analyst	Enlisted
    // 98C	Signals Intelligence Analyst	Enlisted
    // 98D	Emitter Locator/Identifier	Enlisted
    // 98G	EW/Signal Intelligence Voice Interceptor	Enlisted
    // 98G	Cryptologic Communications Interceptor/Locator	Enlisted
    // 98H	Communications Interceptor/Locator	Enlisted
    // 98J	EW/Signal Intelligence Non-communications Interceptor	Enlisted
    // 98J	Electronic Intelligence Interceptor/Analyst	Enlisted
    // 98K	Non-Morse Interceptor/Analyst	Enlisted
    // 98K	Signals Collection/Identification Analyst	Enlisted
    // 98P	Multi-Sensor Operator	Enlisted
    // 98Y	Signals Collector/Analyst	Enlisted
    // 98Z
]

const mos = mosArray.map((mmos, i) => ({ id: i + 1, mmos: mmos.replace(/\s/g, '_').toLowerCase()}));
await knex.schema.raw('TRUNCATE mmos CASCADE')
await knex('mmos').del()
await knex('mmos').del()
await knex('mmmos').insert(mos)
module.exports = mosArray;
};
