// Survesh Bajpai Research Platform - FIXED STABLE VERSION
// All functionality working, no loading loops

// Application data
const stocksData = [
    {
        "symbol": "TCS",
        "name": "Tata Consultancy Services",
        "price": 3545.60,
        "forward_pe": 23.2,
        "forward_roe": 44.8,
        "qvm": 2.186,
        "sharpe": 0.42,
        "beta": 0.85,
        "sector": "IT Software"
    },
    {
        "symbol": "HINDUNILVR",
        "name": "Hindustan Unilever Ltd",
        "price": 2485.60,
        "forward_pe": 52.8,
        "forward_roe": 88.5,
        "qvm": 2.758,
        "sharpe": 0.22,
        "beta": 0.65,
        "sector": "FMCG"
    },
    {
        "symbol": "RELIANCE",
        "name": "Reliance Industries Ltd",
        "price": 2756.25,
        "forward_pe": 26.6,
        "forward_roe": 13.8,
        "qvm": 0.788,
        "sharpe": 0.01,
        "beta": 0.68,
        "sector": "Refineries"
    },
    {
        "symbol": "HDFCBANK",
        "name": "HDFC Bank Ltd",
        "price": 1995.75,
        "forward_pe": 8.4,
        "forward_roe": 15.8,
        "qvm": 1.165,
        "sharpe": 0.16,
        "beta": 1.50,
        "sector": "Banks"
    },
    {
        "symbol": "ICICIBANK",
        "name": "ICICI Bank Ltd",
        "price": 1456.30,
        "forward_pe": 17.8,
        "forward_roe": 16.9,
        "qvm": 1.248,
        "sharpe": 0.28,
        "beta": 1.05,
        "sector": "Banks"
    },
    {
        "symbol": "BHARTIARTL",
        "name": "Bharti Airtel Ltd",
        "price": 1895.45,
        "forward_pe": 32.5,
        "forward_roe": 15.8,
        "qvm": 1.156,
        "sharpe": 0.08,
        "beta": 0.78,
        "sector": "Telecom Services"
    },
    {
        "symbol": "INFY",
        "name": "Infosys Ltd",
        "price": 1625.80,
        "forward_pe": 21.8,
        "forward_roe": 29.8,
        "qvm": 1.685,
        "sharpe": 0.35,
        "beta": 0.92,
        "sector": "IT Software"
    },
    {
        "symbol": "SBIN",
        "name": "State Bank of India",
        "price": 855.25,
        "forward_pe": 13.8,
        "forward_roe": 14.9,
        "qvm": 1.124,
        "sharpe": 0.18,
        "beta": 1.25,
        "sector": "Banks"
    },
    {
        "symbol": "WIPRO",
        "name": "Wipro Ltd",
        "price": 515.75,
        "forward_pe": 16.8,
        "forward_roe": 15.8,
        "qvm": 1.028,
        "sharpe": 0.12,
        "beta": 0.88,
        "sector": "IT Software"
    },
    {
        "symbol": "BAJFINANCE",
        "name": "Bajaj Finance Ltd",
        "price": 7985.30,
        "forward_pe": 25.8,
        "forward_roe": 24.5,
        "qvm": 1.785,
        "sharpe": 0.38,
        "beta": 1.32,
        "sector": "Financial Services"
    }
];

const coursesData = [
    {
        "name": "Quant Expert Trader",
        "sessions": 20,
        "hours": 60,
        "cost": 72000,
        "difficulty": 7.5
    },
    {
        "name": "Quant Expert Investor",
        "sessions": 20,
        "hours": 60,
        "cost": 72000,
        "difficulty": 7.8
    },
    {
        "name": "AI Algo Trader",
        "sessions": 10,
        "hours": 30,
        "cost": 36000,
        "difficulty": 8.2
    },
    {
        "name": "AI Algo Investor",
        "sessions": 10,
        "hours": 30,
        "cost": 36000,
        "difficulty": 8.5
    }
];

const certificationsData = [
    {
        "name": "CFA Level 3",
        "type": "US",
        "difficulty": 8.3,
        "cost": 100000,
        "senior_salary": 100,
        "roi_score": 8.1
    },
    {
        "name": "NISM Series 15",
        "type": "NISM",
        "difficulty": 5.9,
        "cost": 2000,
        "senior_salary": 35,
        "roi_score": 282.5
    },
    {
        "name": "NISM Series 21B",
        "type": "NISM",
        "difficulty": 6.9,
        "cost": 5000,
        "senior_salary": 50,
        "roi_score": 112.7
    },
    {
        "name": "CMT Level 3",
        "type": "US",
        "difficulty": 7.3,
        "cost": 85000,
        "senior_salary": 50,
        "roi_score": 6.0
    }
];

// Global state
let selectedStocks = new Set();
let portfolioChart = null;
let filteredStocks = [...stocksData];
let isInitialized = false;

// SINGLE INITIALIZATION - Called only once
document.addEventListener('DOMContentLoaded', function() {
    if (isInitialized) return;
    
    console.log('Survesh Bajpai Research Platform - Starting initialization...');
    
    try {
        initializeNavigation();
        initializeTheme();
        initializeStocks();
        initializePortfolio();
        initializeDCF();
        initializeCourses();
        initializeCertifications();
        initializeCareer();
        initializeFloatingActionButton();
        
        isInitialized = true;
        console.log('✅ Survesh Bajpai Research Platform - All systems ready!');
    } catch (error) {
        console.error('❌ Initialization error:', error);
    }
});

// FIXED Navigation functionality
function initializeNavigation() {
    console.log('🚀 Initializing navigation...');
    
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    // Hamburger menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('📱 Hamburger menu clicked');
            
            const isActive = navMenu.classList.contains('active');
            
            if (isActive) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
                console.log('📱 Mobile menu closed');
            } else {
                navToggle.classList.add('active');
                navMenu.classList.add('active');
                document.body.style.overflow = 'hidden';
                console.log('📱 Mobile menu opened');
            }
        });
    }
    
    // FIXED: Direct event listeners for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('🔗 Navigation link clicked:', href);
                
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                    
                    // Close mobile menu if open
                    if (navToggle && navMenu) {
                        navToggle.classList.remove('active');
                        navMenu.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                    
                    // Update active link
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                    
                    console.log('✅ Navigated to:', href);
                }
            });
        }
    });
    
    // FIXED: Hero action buttons
    const startAnalysisBtn = document.querySelector('a[href="#stocks"]');
    const viewCoursesBtn = document.querySelector('a[href="#courses"]');
    
    if (startAnalysisBtn) {
        startAnalysisBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('🔍 Start Analysis clicked');
            document.getElementById('stocks').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    if (viewCoursesBtn) {
        viewCoursesBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('📚 View Courses clicked');
            document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    console.log('✅ Navigation initialized');
}

// FIXED Theme switching
function initializeTheme() {
    console.log('🎨 Initializing theme...');
    
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let currentTheme = prefersDark ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-color-scheme', currentTheme);
    themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
    
    themeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('🎨 Theme toggle clicked');
        
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-color-scheme', currentTheme);
        this.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
        
        console.log('✅ Theme switched to:', currentTheme);
    });
    
    console.log('✅ Theme initialized');
}

// FIXED Stock functionality
function initializeStocks() {
    console.log('📈 Initializing stocks...');
    
    populateSectorFilter();
    renderStocks();
    setupFilters();
    
    console.log('✅ Stocks initialized');
}

function populateSectorFilter() {
    const sectorFilter = document.getElementById('sectorFilter');
    if (!sectorFilter) return;
    
    const sectors = [...new Set(stocksData.map(stock => stock.sector))];
    sectors.forEach(sector => {
        const option = document.createElement('option');
        option.value = sector;
        option.textContent = sector;
        sectorFilter.appendChild(option);
    });
    
    console.log('✅ Sector filter populated with', sectors.length, 'sectors');
}

function setupFilters() {
    console.log('🔧 Setting up filters...');
    
    const sectorFilter = document.getElementById('sectorFilter');
    const qvmFilter = document.getElementById('qvmFilter');
    const peFilter = document.getElementById('peFilter');
    const resetFilters = document.getElementById('resetFilters');
    const qvmValue = document.getElementById('qvmValue');
    const peValue = document.getElementById('peValue');
    
    if (!sectorFilter || !qvmFilter || !peFilter) {
        console.error('❌ Filter elements not found');
        return;
    }
    
    // QVM range slider
    qvmFilter.addEventListener('input', function() {
        const value = parseFloat(this.value).toFixed(1);
        qvmValue.textContent = value;
        console.log('🎚️ QVM filter changed to:', value);
        applyFilters();
    });
    
    // PE range slider
    peFilter.addEventListener('input', function() {
        const value = this.value;
        peValue.textContent = value;
        console.log('🎚️ PE filter changed to:', value);
        applyFilters();
    });
    
    // Sector dropdown
    sectorFilter.addEventListener('change', function() {
        console.log('📊 Sector filter changed to:', this.value);
        applyFilters();
    });
    
    // Reset button
    if (resetFilters) {
        resetFilters.addEventListener('click', function() {
            console.log('🔄 Filters reset');
            sectorFilter.value = '';
            qvmFilter.value = 0;
            peFilter.value = 60;
            qvmValue.textContent = '0.0';
            peValue.textContent = '60';
            applyFilters();
        });
    }
    
    console.log('✅ Filters setup complete');
}

function applyFilters() {
    const sectorFilter = document.getElementById('sectorFilter');
    const qvmFilter = document.getElementById('qvmFilter');
    const peFilter = document.getElementById('peFilter');
    
    const sectorValue = sectorFilter?.value || '';
    const qvmValue = parseFloat(qvmFilter?.value || 0);
    const peValue = parseFloat(peFilter?.value || 60);
    
    filteredStocks = stocksData.filter(stock => {
        const sectorMatch = !sectorValue || stock.sector === sectorValue;
        const qvmMatch = stock.qvm >= qvmValue;
        const peMatch = stock.forward_pe <= peValue;
        return sectorMatch && qvmMatch && peMatch;
    });
    
    console.log('🔍 Filters applied:', filteredStocks.length, 'stocks match');
    renderStocks();
}

function renderStocks() {
    const stocksGrid = document.getElementById('stocksGrid');
    if (!stocksGrid) return;
    
    stocksGrid.innerHTML = '';
    
    if (filteredStocks.length === 0) {
        stocksGrid.innerHTML = '<div class="empty-state">No stocks match your filters</div>';
        return;
    }
    
    filteredStocks.forEach(stock => {
        const stockCard = createStockCard(stock);
        stocksGrid.appendChild(stockCard);
    });
    
    console.log('📊 Rendered', filteredStocks.length, 'stock cards');
}

function createStockCard(stock) {
    const card = document.createElement('div');
    card.className = `stock-card ${selectedStocks.has(stock.symbol) ? 'selected' : ''}`;
    card.innerHTML = `
        <div class="stock-header">
            <div>
                <div class="stock-symbol">${stock.symbol}</div>
                <div class="stock-name">${stock.name}</div>
            </div>
            <div class="stock-price">₹${stock.price.toFixed(2)}</div>
        </div>
        <div class="stock-metrics">
            <div class="stock-metric">
                <span class="metric-label">QVM</span>
                <span class="metric-value qvm-score">${stock.qvm.toFixed(3)}</span>
            </div>
            <div class="stock-metric">
                <span class="metric-label">P/E</span>
                <span class="metric-value">${stock.forward_pe.toFixed(1)}</span>
            </div>
            <div class="stock-metric">
                <span class="metric-label">ROE</span>
                <span class="metric-value">${stock.forward_roe.toFixed(1)}%</span>
            </div>
            <div class="stock-metric">
                <span class="metric-label">Beta</span>
                <span class="metric-value">${stock.beta.toFixed(2)}</span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', function() {
        toggleStockSelection(stock);
    });
    
    return card;
}

function toggleStockSelection(stock) {
    console.log('👆 Stock card clicked:', stock.symbol);
    
    if (selectedStocks.has(stock.symbol)) {
        selectedStocks.delete(stock.symbol);
        console.log('➖ Removed from portfolio:', stock.symbol);
    } else {
        selectedStocks.add(stock.symbol);
        console.log('➕ Added to portfolio:', stock.symbol);
    }
    
    renderStocks();
    updatePortfolio();
}

// FIXED Portfolio functionality
function initializePortfolio() {
    console.log('📋 Initializing portfolio...');
    
    const clearPortfolio = document.getElementById('clearPortfolio');
    const analyzePortfolio = document.getElementById('analyzePortfolio');
    
    if (clearPortfolio) {
        clearPortfolio.addEventListener('click', function() {
            console.log('🗑️ Clear portfolio clicked');
            selectedStocks.clear();
            renderStocks();
            updatePortfolio();
        });
    }
    
    if (analyzePortfolio) {
        analyzePortfolio.addEventListener('click', function() {
            console.log('📊 Analyze portfolio clicked');
            if (selectedStocks.size > 0) {
                updatePortfolioChart();
            } else {
                console.log('⚠️ No stocks in portfolio to analyze');
            }
        });
    }
    
    updatePortfolio();
    console.log('✅ Portfolio initialized');
}

function updatePortfolio() {
    const portfolioList = document.getElementById('portfolioList');
    if (!portfolioList) return;
    
    const selectedStocksList = Array.from(selectedStocks).map(symbol => 
        stocksData.find(stock => stock.symbol === symbol)
    ).filter(Boolean);
    
    if (selectedStocksList.length === 0) {
        portfolioList.innerHTML = '<div class="empty-portfolio"><p>Select stocks to add to your portfolio</p></div>';
        updatePortfolioMetrics([]);
        return;
    }
    
    portfolioList.innerHTML = selectedStocksList.map(stock => `
        <div class="portfolio-item">
            <div class="portfolio-item-info">
                <div class="portfolio-item-symbol">${stock.symbol}</div>
                <div class="portfolio-item-name">${stock.name}</div>
            </div>
            <button class="remove-stock" onclick="removeFromPortfolio('${stock.symbol}')">×</button>
        </div>
    `).join('');
    
    updatePortfolioMetrics(selectedStocksList);
    console.log('📊 Portfolio updated with', selectedStocksList.length, 'stocks');
}

function removeFromPortfolio(symbol) {
    console.log('🗑️ Remove from portfolio:', symbol);
    selectedStocks.delete(symbol);
    renderStocks();
    updatePortfolio();
}

function updatePortfolioMetrics(stocks) {
    const elements = {
        'avgQVM': document.getElementById('avgQVM'),
        'portfolioBeta': document.getElementById('portfolioBeta'),
        'avgSharpe': document.getElementById('avgSharpe'),
        'diversification': document.getElementById('diversification')
    };
    
    if (!elements.avgQVM) return;
    
    if (stocks.length === 0) {
        Object.values(elements).forEach(el => {
            if (el) el.textContent = '-';
        });
        return;
    }
    
    const avgQVMValue = stocks.reduce((sum, stock) => sum + stock.qvm, 0) / stocks.length;
    const avgBeta = stocks.reduce((sum, stock) => sum + stock.beta, 0) / stocks.length;
    const avgSharpeValue = stocks.reduce((sum, stock) => sum + stock.sharpe, 0) / stocks.length;
    const sectors = new Set(stocks.map(stock => stock.sector));
    
    if (elements.avgQVM) elements.avgQVM.textContent = avgQVMValue.toFixed(3);
    if (elements.portfolioBeta) elements.portfolioBeta.textContent = avgBeta.toFixed(2);
    if (elements.avgSharpe) elements.avgSharpe.textContent = avgSharpeValue.toFixed(2);
    if (elements.diversification) elements.diversification.textContent = `${sectors.size} sectors`;
    
    console.log('📈 Portfolio metrics updated');
}

function updatePortfolioChart() {
    const canvas = document.getElementById('portfolioChart');
    if (!canvas) return;
    
    const selectedStocksList = Array.from(selectedStocks).map(symbol => 
        stocksData.find(stock => stock.symbol === symbol)
    ).filter(Boolean);
    
    if (selectedStocksList.length === 0) return;
    
    // Destroy existing chart
    if (portfolioChart) {
        portfolioChart.destroy();
        portfolioChart = null;
    }
    
    const ctx = canvas.getContext('2d');
    const sectorData = {};
    selectedStocksList.forEach(stock => {
        sectorData[stock.sector] = (sectorData[stock.sector] || 0) + 1;
    });
    
    portfolioChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(sectorData),
            datasets: [{
                data: Object.values(sectorData),
                backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        usePointStyle: true,
                        font: { size: 12 }
                    }
                },
                title: {
                    display: true,
                    text: 'Portfolio Sector Allocation'
                }
            }
        }
    });
    
    console.log('📈 Portfolio chart updated');
}

// FIXED DCF Calculator
function initializeDCF() {
    console.log('🧮 Initializing DCF calculator...');
    
    const calculateDCF = document.getElementById('calculateDCF');
    const inputs = ['currentFCF', 'growthRate', 'discountRate', 'terminalGrowth', 'projectionYears'];
    
    // Add event listeners for real-time calculation
    inputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            input.addEventListener('input', function() {
                console.log('🧮 DCF input changed:', inputId, '=', this.value);
                calculateDCFValues();
            });
            input.addEventListener('change', function() {
                console.log('🧮 DCF input changed:', inputId, '=', this.value);
                calculateDCFValues();
            });
        }
    });
    
    if (calculateDCF) {
        calculateDCF.addEventListener('click', function() {
            console.log('🧮 Calculate DCF button clicked');
            calculateDCFValues();
        });
    }
    
    // Initial calculation
    calculateDCFValues();
    console.log('✅ DCF calculator initialized');
}

function calculateDCFValues() {
    try {
        const currentFCF = parseFloat(document.getElementById('currentFCF')?.value) || 1000;
        const growthRate = parseFloat(document.getElementById('growthRate')?.value) / 100 || 0.15;
        const discountRate = parseFloat(document.getElementById('discountRate')?.value) / 100 || 0.12;
        const terminalGrowth = parseFloat(document.getElementById('terminalGrowth')?.value) / 100 || 0.03;
        const projectionYears = parseInt(document.getElementById('projectionYears')?.value) || 5;
        
        let pvFCF = 0;
        let projectedFCF = currentFCF;
        
        // Calculate present value of projected cash flows
        for (let year = 1; year <= projectionYears; year++) {
            projectedFCF *= (1 + growthRate);
            pvFCF += projectedFCF / Math.pow(1 + discountRate, year);
        }
        
        // Calculate terminal value
        const terminalFCF = projectedFCF * (1 + terminalGrowth);
        const terminalValue = terminalFCF / (discountRate - terminalGrowth);
        const pvTerminalValue = terminalValue / Math.pow(1 + discountRate, projectionYears);
        
        // Calculate enterprise value and intrinsic value
        const enterpriseValue = pvFCF + pvTerminalValue;
        const sharesOutstanding = 100;
        const intrinsicValue = (enterpriseValue / sharesOutstanding) * 10000000;
        
        // Update UI
        const updates = [
            ['pvFCF', `₹ ${pvFCF.toFixed(0)} Cr`],
            ['terminalValue', `₹ ${pvTerminalValue.toFixed(0)} Cr`],
            ['enterpriseValue', `₹ ${enterpriseValue.toFixed(0)} Cr`],
            ['intrinsicValue', `₹ ${intrinsicValue.toFixed(0)}`]
        ];
        
        updates.forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = value;
            }
        });
        
        console.log('🧮 DCF values updated');
        
    } catch (error) {
        console.error('❌ DCF calculation error:', error);
    }
}

// Courses functionality
function initializeCourses() {
    console.log('📚 Initializing courses...');
    renderCourses();
    console.log('✅ Courses initialized');
}

function renderCourses() {
    const coursesGrid = document.getElementById('coursesGrid');
    if (!coursesGrid) return;
    
    coursesGrid.innerHTML = '';
    coursesData.forEach(course => {
        const courseCard = createCourseCard(course);
        coursesGrid.appendChild(courseCard);
    });
}

function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.innerHTML = `
        <h4>${course.name}</h4>
        <div class="course-details">
            <div class="course-detail">
                <div class="detail-value">${course.sessions}</div>
                <div class="detail-label">Sessions</div>
            </div>
            <div class="course-detail">
                <div class="detail-value">${course.hours}</div>
                <div class="detail-label">Hours</div>
            </div>
            <div class="course-detail">
                <div class="detail-value">₹${(course.cost / 1000).toFixed(0)}K</div>
                <div class="detail-label">Cost</div>
            </div>
            <div class="course-detail">
                <div class="detail-value">${course.difficulty.toFixed(1)}</div>
                <div class="detail-label">Difficulty</div>
            </div>
        </div>
        <div class="difficulty-bar">
            <div class="difficulty-fill" style="width: ${(course.difficulty / 10) * 100}%"></div>
        </div>
        <button class="btn btn--primary btn--full-width">Enroll Now</button>
    `;
    return card;
}

// Certifications functionality
function initializeCertifications() {
    console.log('🏆 Initializing certifications...');
    populateCertificationSelect();
    renderCertifications();
    calculateROI();
    
    // Add event listeners for ROI calculator
    const inputs = ['currentSalary', 'experience', 'certificationSelect'];
    inputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        if (input) {
            input.addEventListener('change', calculateROI);
            input.addEventListener('input', calculateROI);
        }
    });
    
    console.log('✅ Certifications initialized');
}

function populateCertificationSelect() {
    const select = document.getElementById('certificationSelect');
    if (!select) return;
    
    certificationsData.forEach(cert => {
        const option = document.createElement('option');
        option.value = cert.name;
        option.textContent = cert.name;
        select.appendChild(option);
    });
}

function renderCertifications() {
    const certificationsGrid = document.getElementById('certificationsGrid');
    if (!certificationsGrid) return;
    
    certificationsGrid.innerHTML = '';
    certificationsData.forEach(cert => {
        const certCard = createCertificationCard(cert);
        certificationsGrid.appendChild(certCard);
    });
}

function createCertificationCard(cert) {
    const card = document.createElement('div');
    card.className = 'certification-card';
    card.innerHTML = `
        <div class="cert-header">
            <div class="cert-name">${cert.name}</div>
            <div class="cert-type">${cert.type}</div>
        </div>
        <div class="cert-metrics">
            <div class="cert-metric">
                <div class="cert-metric-value">${cert.difficulty.toFixed(1)}/10</div>
                <div class="cert-metric-label">Difficulty</div>
            </div>
            <div class="cert-metric">
                <div class="cert-metric-value">₹${(cert.cost / 1000).toFixed(0)}K</div>
                <div class="cert-metric-label">Cost</div>
            </div>
            <div class="cert-metric">
                <div class="cert-metric-value">₹${cert.senior_salary} LPA</div>
                <div class="cert-metric-label">Senior Salary</div>
            </div>
            <div class="cert-metric">
                <div class="cert-metric-value">${cert.roi_score.toFixed(1)}</div>
                <div class="cert-metric-label">ROI Score</div>
            </div>
        </div>
    `;
    return card;
}

function calculateROI() {
    const currentSalary = parseFloat(document.getElementById('currentSalary')?.value) || 8;
    const experience = parseInt(document.getElementById('experience')?.value) || 3;
    const certificationName = document.getElementById('certificationSelect')?.value;
    
    const certification = certificationsData.find(cert => cert.name === certificationName);
    if (!certification) return;
    
    const experienceMultiplier = 1 + (experience * 0.05);
    const expectedSalary = certification.senior_salary * experienceMultiplier;
    const salaryIncrease = expectedSalary - currentSalary;
    const roiScore = salaryIncrease > 0 ? (salaryIncrease * 100000) / certification.cost : 0;
    
    const updates = [
        ['investmentCost', `₹${(certification.cost / 1000).toFixed(0)}K`],
        ['expectedSalary', `₹${expectedSalary.toFixed(1)} LPA`],
        ['roiScore', roiScore.toFixed(1)]
    ];
    
    updates.forEach(([id, value]) => {
        const element = document.getElementById(id);
        if (element) element.textContent = value;
    });
}

// Career functionality
function initializeCareer() {
    console.log('💼 Initializing career...');
    
    const simulatePath = document.getElementById('simulatePath');
    const timeline = document.getElementById('timeline');
    const timelineValue = document.getElementById('timelineValue');
    
    if (timeline && timelineValue) {
        timeline.addEventListener('input', function() {
            timelineValue.textContent = `${this.value} years`;
        });
    }
    
    if (simulatePath) {
        simulatePath.addEventListener('click', generateCareerPath);
    }
    
    console.log('✅ Career initialized');
}

function generateCareerPath() {
    console.log('💼 Generating career path...');
    
    const currentRole = document.getElementById('currentRole')?.value;
    const targetRole = document.getElementById('targetRole')?.value;
    const timeline = parseInt(document.getElementById('timeline')?.value);
    const pathStepsElement = document.getElementById('pathSteps');
    
    if (!pathStepsElement) return;
    
    const careerPaths = {
        'analyst-associate': [
            { title: 'Build Technical Skills', description: 'Master financial modeling and valuation techniques' },
            { title: 'Gain CFA Level 1', description: 'Complete CFA Level 1 to enhance credibility' },
            { title: 'Expand Network', description: 'Connect with industry professionals and mentors' }
        ],
        'associate-manager': [
            { title: 'Lead Team Projects', description: 'Take ownership of portfolio analysis initiatives' },
            { title: 'Advanced Certifications', description: 'Complete CFA Level 2 or specialized quant programs' },
            { title: 'Client Interaction', description: 'Develop client-facing skills and presentation abilities' }
        ],
        'manager-director': [
            { title: 'Strategic Leadership', description: 'Lead multi-million dollar investment strategies' },
            { title: 'P&L Responsibility', description: 'Manage portfolio performance and risk metrics' },
            { title: 'Business Development', description: 'Acquire new clients and expand AUM' }
        ],
        'director-cio': [
            { title: 'Organizational Vision', description: 'Define investment philosophy and firm strategy' },
            { title: 'Regulatory Expertise', description: 'Master compliance and risk management frameworks' },
            { title: 'Industry Recognition', description: 'Build thought leadership through research and speaking' }
        ]
    };
    
    const pathKey = `${currentRole}-${targetRole}`;
    const steps = careerPaths[pathKey] || [
        { title: 'Skill Development', description: 'Focus on building relevant technical and leadership skills' },
        { title: 'Professional Growth', description: 'Seek mentorship and expand professional network' },
        { title: 'Strategic Positioning', description: 'Position yourself for the target role through achievements' }
    ];
    
    pathStepsElement.innerHTML = steps.map((step, index) => `
        <div class="path-step">
            <div class="step-number">${index + 1}</div>
            <div class="step-content">
                <h4>${step.title}</h4>
                <p>${step.description}</p>
            </div>
        </div>
    `).join('');
    
    console.log('✅ Career path generated');
}

// Floating Action Button
function initializeFloatingActionButton() {
    const fab = document.getElementById('fab');
    if (!fab) return;
    
    fab.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Show/hide FAB based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            fab.style.display = 'flex';
            fab.style.opacity = '1';
        } else {
            fab.style.opacity = '0';
            fab.style.display = 'none';
        }
    });
    
    fab.style.display = 'none';
}

// Make functions globally available for HTML onclick handlers
window.removeFromPortfolio = removeFromPortfolio;