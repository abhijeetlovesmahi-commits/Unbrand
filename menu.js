document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    if (!wrapper) return;

    const sidebar = document.createElement('div');
    sidebar.className = 'sidebar no-print';
    sidebar.innerHTML = `
        <div class="sidebar-header">
            <h2>THE LALIT</h2>
            <small>Session 2026-27</small>
        </div>
        <ul class="sidebar-menu">
            <li><a href="index.html"><i class="fas fa-chart-line"></i> <span>Dashboard</span></a></li>
            <li><a href="add-student.html"><i class="fas fa-user-plus"></i> <span>Admission</span></a></li>
            <li><a href="view-students.html"><i class="fas fa-users"></i> <span>Registry</span></a></li>
            <li><a href="fee-master.html"><i class="fas fa-cog"></i> <span>Fees Setup</span></a></li>
            <li><a href="collect-fees.html"><i class="fas fa-cash-register"></i> <span>Collect Fee</span></a></li>
            <li><a href="attendance.html"><i class="fas fa-calendar-check"></i> <span>Attendance</span></a></li>
            <li><a href="marks-entry.html"><i class="fas fa-edit"></i> <span>Marks Entry</span></a></li>
            <li><a href="report-card.html"><i class="fas fa-print"></i> <span>Report Card</span></a></li>
        </ul>
    `;
    wrapper.insertBefore(sidebar, wrapper.firstChild);
});
