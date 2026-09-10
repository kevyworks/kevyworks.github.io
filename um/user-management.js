// We scope this so it wont interfere.
(function () {
  "use strict";

  // MOCK DATA

  const GROUPS = ["Admin", "Licensed", "Forward", "Recruiter"];
  const USER_TYPES = ["Employee", "Contractor", "Vendor"];
  const REGION_DIVISION = [
    { region: "NY", division: "Corporate" },
    { region: "CA", division: "West" },
    { region: "TX", division: "South" },
    { region: "MA", division: "East" },
    { region: "IL", division: "Central" },
  ];
  const STATUSES = ["Active", "Inactive", "Pending"];
  const USER_DATA = [
    {
      id: "AKVYX48291",
      firstName: "James",
      lastName: "Smith",
      username: "jamess",
      group: "Admin",
      region: "NY",
      division: "Corporate",
      userType: "Employee",
      submittedDate: "2026-08-12",
      enabledDate: "2026-08-13",
      status: "Active",
    },
    {
      id: "XVKA27395Y",
      firstName: "Jennifer",
      lastName: "Johnson",
      username: "jenniferj",
      group: "Licensed",
      region: "CA",
      division: "West",
      userType: "Contractor",
      submittedDate: "2026-08-13",
      enabledDate: "2026-08-14",
      status: "Inactive",
    },
    {
      id: "K9A3VX724Y",
      firstName: "Michael",
      lastName: "Williams",
      username: "michaelw",
      group: "Forward",
      region: "TX",
      division: "South",
      userType: "Vendor",
      submittedDate: "2026-08-14",
      enabledDate: "2026-08-15",
      status: "Pending",
    },
    {
      id: "Y2AXK8V163",
      firstName: "Lisa",
      lastName: "Brown",
      username: "lisab",
      group: "Recruiter",
      region: "MA",
      division: "East",
      userType: "Employee",
      submittedDate: "2026-08-15",
      enabledDate: "2026-08-16",
      status: "Active",
    },
    {
      id: "3A9KVYX742",
      firstName: "David",
      lastName: "Jones",
      username: "davidj",
      group: "Admin",
      region: "IL",
      division: "Central",
      userType: "Contractor",
      submittedDate: "2026-08-16",
      enabledDate: "2026-08-17",
      status: "Inactive",
    },
    {
      id: "VY8A2KX591",
      firstName: "Nancy",
      lastName: "Miller",
      username: "nancym",
      group: "Licensed",
      region: "NY",
      division: "Corporate",
      userType: "Vendor",
      submittedDate: "2026-08-17",
      enabledDate: "2026-08-18",
      status: "Pending",
    },
    {
      id: "A7K2YVX835",
      firstName: "Robert",
      lastName: "Davis",
      username: "robertd",
      group: "Forward",
      region: "CA",
      division: "West",
      userType: "Employee",
      submittedDate: "2026-08-18",
      enabledDate: "2026-08-19",
      status: "Active",
    },
    {
      id: "X4V9AKY628",
      firstName: "Karen",
      lastName: "Garcia",
      username: "kareng",
      group: "Recruiter",
      region: "TX",
      division: "South",
      userType: "Contractor",
      submittedDate: "2026-08-19",
      enabledDate: "2026-08-20",
      status: "Inactive",
    },
    {
      id: "1Y3AXKV947",
      firstName: "William",
      lastName: "Rodriguez",
      username: "williamr",
      group: "Admin",
      region: "MA",
      division: "East",
      userType: "Vendor",
      submittedDate: "2026-08-20",
      enabledDate: "2026-08-21",
      status: "Pending",
    },
    {
      id: "9K2VAYX385",
      firstName: "Betty",
      lastName: "Wilson",
      username: "bettyw",
      group: "Licensed",
      region: "IL",
      division: "Central",
      userType: "Employee",
      submittedDate: "2026-08-21",
      enabledDate: "2026-08-22",
      status: "Active",
    },
    {
      id: "8A5XYKV291",
      firstName: "Richard",
      lastName: "Martinez",
      username: "richardm",
      group: "Forward",
      region: "NY",
      division: "Corporate",
      userType: "Contractor",
      submittedDate: "2026-08-22",
      enabledDate: "2026-08-23",
      status: "Inactive",
    },
    {
      id: "2V7KAXY463",
      firstName: "Dorothy",
      lastName: "Anderson",
      username: "dorothya",
      group: "Recruiter",
      region: "CA",
      division: "West",
      userType: "Vendor",
      submittedDate: "2026-08-23",
      enabledDate: "2026-08-24",
      status: "Pending",
    },
    {
      id: "Y5A9VXK712",
      firstName: "Joseph",
      lastName: "Taylor",
      username: "josepht",
      group: "Admin",
      region: "TX",
      division: "South",
      userType: "Employee",
      submittedDate: "2026-08-24",
      enabledDate: "2026-08-25",
      status: "Active",
    },
    {
      id: "K3XVAY8294",
      firstName: "Sandra",
      lastName: "Thomas",
      username: "sandrat",
      group: "Licensed",
      region: "MA",
      division: "East",
      userType: "Contractor",
      submittedDate: "2026-08-25",
      enabledDate: "2026-08-26",
      status: "Inactive",
    },
    {
      id: "7X2AKVY583",
      firstName: "Thomas",
      lastName: "Hernandez",
      username: "thomash",
      group: "Forward",
      region: "IL",
      division: "Central",
      userType: "Vendor",
      submittedDate: "2026-08-26",
      enabledDate: "2026-08-27",
      status: "Pending",
    },
    {
      id: "A6Y9KXV372",
      firstName: "Ashley",
      lastName: "Moore",
      username: "ashleym",
      group: "Recruiter",
      region: "NY",
      division: "Corporate",
      userType: "Employee",
      submittedDate: "2026-08-27",
      enabledDate: "2026-08-28",
      status: "Active",
    },
    {
      id: "V4X2AYK915",
      firstName: "Daniel",
      lastName: "Martin",
      username: "danielm",
      group: "Admin",
      region: "CA",
      division: "West",
      userType: "Contractor",
      submittedDate: "2026-08-28",
      enabledDate: "2026-08-29",
      status: "Inactive",
    },
    {
      id: "5Y8A2KVX39",
      firstName: "Emily",
      lastName: "Jackson",
      username: "emilyj",
      group: "Licensed",
      region: "TX",
      division: "South",
      userType: "Vendor",
      submittedDate: "2026-08-29",
      enabledDate: "2026-08-30",
      status: "Pending",
    },
    {
      id: "X1K7AYV842",
      firstName: "Mark",
      lastName: "White",
      username: "markw",
      group: "Forward",
      region: "MA",
      division: "East",
      userType: "Employee",
      submittedDate: "2026-08-30",
      enabledDate: "2026-08-31",
      status: "Active",
    },
    {
      id: "3V9AKYX657",
      firstName: "Michelle",
      lastName: "Lopez",
      username: "michellel",
      group: "Recruiter",
      region: "IL",
      division: "Central",
      userType: "Contractor",
      submittedDate: "2026-08-31",
      enabledDate: "2026-09-01",
      status: "Inactive",
    },
  ];

  // UTIL

  function randomStr(len, arr) {
    let rv = "";
    for (let i = len; i > 0; i--) {
      rv += arr[Math.floor(Math.random() * arr.length)];
    }
    return rv;
  }

  function generateID() {
    return randomStr(10, "AKVYX123456789");
  }

  // USER DATA METHOD

  function mk(
    id,
    firstName,
    lastName,
    username,
    group,
    rdIdx,
    submittedDate,
    enabledDate,
    status,
  ) {
    const rd = REGION_DIVISION[rdIdx];
    return {
      id: id || generateID(),
      firstName,
      lastName,
      username,
      group,
      region: rd.region,
      division: rd.division,
      userType: USER_TYPES[id % USER_TYPES.length],
      submittedDate,
      enabledDate,
      status,
    };
  }

  // SIDEBAR NAVIGATION DATA

  const sidebarSections = [
    {
      icon: "bi-people-fill",
      label: "User management",
      active: true,
      children: [
        { icon: "bi-person-badge", label: "Edit Users", active: true },
        { icon: "bi-people-fill", label: "Edit Workgroups", active: false },
      ],
    },
    { icon: "bi-file-earmark-text-fill", label: "File management" },
    { icon: "bi-diagram-3-fill", label: "Site management" },
    { icon: "bi-megaphone-fill", label: "Marketing management" },
    { icon: "bi-person-lines-fill", label: "CRM management" },
    { icon: "bi-bar-chart-fill", label: "Critical Metrics" },
  ];

  function renderSidebar(containerId) {
    const el = document.getElementById(containerId);
    let html = "";
    sidebarSections.forEach((section, idx) => {
      const hasChildren = Array.isArray(section.children);
      const collapseId = containerId + "-collapse-" + idx;
      if (hasChildren) {
        html += `
          <div class="side-item ${section.active ? "parent-active" : ""}" role="button"
               data-bs-toggle="collapse" data-bs-target="#${collapseId}"
               aria-expanded="${section.active ? "true" : "false"}" aria-controls="${collapseId}">
            <span class="side-icon"><i class="bi ${section.icon}"></i></span>
            <span>${section.label}</span>
            <span class="chev"><i class="bi bi-chevron-right"></i></span>
          </div>
          <div class="collapse ${section.active ? "show" : ""} side-sub" id="${collapseId}">
            ${section.children
              .map(
                (c) => `
              <a href="#" class="side-sub-item ${c.active ? "active" : ""}">
                <span class="side-sub-icon"><i class="bi ${c.icon}"></i></span>
                ${c.label}
              </a>
            `,
              )
              .join("")}
          </div>`;
      } else {
        html += `
          <a href="#" class="side-item">
            <span class="side-icon"><i class="bi ${section.icon}"></i></span>
            <span>${section.label}</span>
          </a>`;
      }
    });
    el.innerHTML = html;
  }

  renderSidebar("sidebarDesktop");
  renderSidebar("sidebarMobile");

  // Close the offcanvas sidebar when a link inside it is tapped (mobile UX)
  document
    .getElementById("sidebarMobile")
    .addEventListener("click", function (e) {
      const link = e.target.closest(".side-sub-item, .sidebar a.side-item");
      if (link) {
        const oc = bootstrap.Offcanvas.getInstance(
          document.getElementById("sidebarOffcanvas"),
        );
        if (oc) oc.hide();
      }
    });

  let users = [...USER_DATA];

  let nextId = Math.max(...users.map((u) => u.id)) + 1;

  // FILTER STATE

  const state = {
    search: "",
    searchField: "all",
    status: "",
    region: "",
    division: "",
    userType: "",
    sortKey: "id",
    sortDir: "asc",
    page: 1,
    pageSize: 10,
  };

  // FILTER DROPDOWN OPTIONS (built from data, keeps it in sync)

  function populateSelect(el, values, placeholder) {
    el.innerHTML =
      `<option value="">${placeholder}</option>` +
      values.map((v) => `<option value="${v}">${v}</option>`).join("");
  }
  function refreshFilterOptions() {
    const regions = [...new Set(users.map((u) => u.region))].sort();
    const divisions = [...new Set(users.map((u) => u.division))].sort();
    const types = [...new Set(users.map((u) => u.userType))].sort();
    populateSelect(document.getElementById("filterRegion"), regions, "All");
    populateSelect(document.getElementById("filterDivision"), divisions, "All");
    populateSelect(document.getElementById("filterUserType"), types, "All");
    // keep selection if still valid
    document.getElementById("filterRegion").value = state.region;
    document.getElementById("filterDivision").value = state.division;
    document.getElementById("filterUserType").value = state.userType;
  }

  function populateFormSelects() {
    populateSelect(
      document.getElementById("userGroup"),
      GROUPS,
      "Select group",
    );
    populateSelect(
      document.getElementById("userType"),
      USER_TYPES,
      "Select type",
    );
    const regions = [...new Set(REGION_DIVISION.map((r) => r.region))];
    const divisions = [...new Set(REGION_DIVISION.map((r) => r.division))];
    populateSelect(
      document.getElementById("userDivision"),
      divisions,
      "Select division",
    );
    populateSelect(
      document.getElementById("userRegion"),
      regions,
      "Select region",
    );
  }

  // RENDER

  function statusBadge(status) {
    const cls =
      status === "Active"
        ? "badge-active"
        : status === "Inactive"
          ? "badge-inactive"
          : "badge-pending";
    return `<span class="badge-status ${cls}">${status}</span>`;
  }

  function getFiltered() {
    let list = users.slice();

    if (state.search.trim() !== "") {
      const q = state.search.trim().toLowerCase();
      list = list.filter((u) => {
        if (state.searchField === "all") {
          return (
            String(u.id).includes(q) ||
            u.firstName.toLowerCase().includes(q) ||
            u.lastName.toLowerCase().includes(q) ||
            u.username.toLowerCase().includes(q) ||
            u.group.toLowerCase().includes(q)
          );
        }
        if (state.searchField === "id") return String(u.id).includes(q);
        return String(u[state.searchField] || "")
          .toLowerCase()
          .includes(q);
      });
    }

    // FILTER LOGIC

    if (state.status) list = list.filter((u) => u.status === state.status);
    if (state.region) list = list.filter((u) => u.region === state.region);
    if (state.division)
      list = list.filter((u) => u.division === state.division);
    if (state.userType)
      list = list.filter((u) => u.userType === state.userType);

    list.sort((a, b) => {
      let av = a[state.sortKey],
        bv = b[state.sortKey];
      if (typeof av === "number" && typeof bv === "number") {
        return state.sortDir === "asc" ? av - bv : bv - av;
      }
      av = String(av).toLowerCase();
      bv = String(bv).toLowerCase();
      if (av < bv) return state.sortDir === "asc" ? -1 : 1;
      if (av > bv) return state.sortDir === "asc" ? 1 : -1;
      return 0;
    });

    return list;
  }

  function render() {
    const filtered = getFiltered();
    const total = filtered.length;
    const totalPages = Math.max(1, Math.ceil(total / state.pageSize));
    if (state.page > totalPages) state.page = totalPages;
    if (state.page < 1) state.page = 1;

    const start = (state.page - 1) * state.pageSize;
    const pageItems = filtered.slice(start, start + state.pageSize);

    // Create the table rows

    const tbody = document.getElementById("tableBody");
    const emptyState = document.getElementById("emptyState");

    if (pageItems.length === 0) {
      tbody.innerHTML = "";
      emptyState.classList.remove("d-none");
    } else {
      emptyState.classList.add("d-none");
      tbody.innerHTML = pageItems
        .map(
          (u) => `
        <tr class="${u.status === "Inactive" ? "row-disabled" : ""}">
          <td>${u.id}</td>
          <td>${escapeHtml(u.firstName)}</td>
          <td>${escapeHtml(u.lastName)}</td>
          <td class="cell-username" title="${escapeHtml(u.username)}">${escapeHtml(u.username)}</td>
          <td>${escapeHtml(u.group)}</td>
          <td>${escapeHtml(u.division)}</td>
          <td>${escapeHtml(u.region)}</td>
          <td>${escapeHtml(u.userType)}</td>
          <td>${u.submittedDate}</td>
          <td>${u.enabledDate}</td>
          <td>${statusBadge(u.status)}</td>
          <td>
            <button class="act-btn" data-action="edit" data-id="${u.id}" title="Edit user" aria-label="Edit user">
              <i class="bi bi-pencil-square"></i>
            </button>
            <button class="act-btn ${u.status === "Inactive" ? "success" : "danger"}" data-action="toggle" data-id="${u.id}"
                    title="${u.status === "Inactive" ? "Enable user" : "Disable user"}"
                    aria-label="${u.status === "Inactive" ? "Enable user" : "Disable user"}">
              <i class="bi ${u.status === "Inactive" ? "bi-check-circle" : "bi-slash-circle"}"></i>
            </button>
          </td>
        </tr>
      `,
        )
        .join("");
    }

    document.getElementById("entriesInfo").textContent =
      total === 0
        ? "Showing 0 to 0 of 0 entries"
        : `Showing ${start + 1} to ${Math.min(start + state.pageSize, total)} of ${total} entries`;

    renderPagination(totalPages);
    updateSortIndicators();
  }

  function updateSortIndicators() {
    document.querySelectorAll("#tableHeadRow th[data-key]").forEach((th) => {
      th.classList.toggle("sorted", th.dataset.key === state.sortKey);
      const icon = th.querySelector(".sort-ic");
      if (th.dataset.key === state.sortKey) {
        icon.className =
          "bi sort-ic " +
          (state.sortDir === "asc" ? "bi-arrow-up" : "bi-arrow-down");
      } else {
        icon.className = "bi bi-arrow-down-up sort-ic";
      }
    });
  }

  function renderPagination(totalPages) {
    const el = document.getElementById("paginationList");
    let html = "";

    html += pageItem("Previous", state.page - 1, state.page === 1, false);

    const pages = pageRange(state.page, totalPages);
    pages.forEach((p) => {
      if (p === "...") {
        html += `<li class="page-item disabled"><span class="page-link">&hellip;</span></li>`;
      } else {
        html += pageItem(p, p, false, p === state.page);
      }
    });

    html += pageItem("Next", state.page + 1, state.page === totalPages, false);

    el.innerHTML = html;
  }

  function pageItem(label, targetPage, disabled, active) {
    return `
      <li class="page-item ${disabled ? "disabled" : ""} ${active ? "active" : ""}">
        <a href="#" class="page-link" data-page="${targetPage}">${label}</a>
      </li>`;
  }

  function pageRange(current, total) {
    const delta = 1;
    const range = [];
    for (let i = 1; i <= total; i++) {
      if (
        i === 1 ||
        i === total ||
        (i >= current - delta && i <= current + delta)
      ) {
        range.push(i);
      } else if (range[range.length - 1] !== "...") {
        range.push("...");
      }
    }
    return range;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // TOAST HELPER

  const toastEl = document.getElementById("appToast");
  const toast = new bootstrap.Toast(toastEl, { delay: 2200 });
  function showToast(msg) {
    document.getElementById("appToastBody").textContent = msg;
    toast.show();
  }

  // EVENT BINDINGS — search / filters / sort / pagination

  document.getElementById("searchInput").addEventListener("input", (e) => {
    state.search = e.target.value;
    state.page = 1;
    render();
  });

  document
    .getElementById("searchFieldSelect")
    .addEventListener("change", (e) => {
      state.searchField = e.target.value;
      state.page = 1;
      render();
    });

  document.getElementById("filterStatus").addEventListener("change", (e) => {
    state.status = e.target.value;
    state.page = 1;
    render();
  });
  document.getElementById("filterRegion").addEventListener("change", (e) => {
    state.region = e.target.value;
    state.page = 1;
    render();
  });
  document.getElementById("filterDivision").addEventListener("change", (e) => {
    state.division = e.target.value;
    state.page = 1;
    render();
  });
  document.getElementById("filterUserType").addEventListener("change", (e) => {
    state.userType = e.target.value;
    state.page = 1;
    render();
  });

  document.getElementById("clearFiltersBtn").addEventListener("click", (e) => {
    e.preventDefault();
    state.search = "";
    state.searchField = "all";
    state.status = "";
    state.region = "";
    state.division = "";
    state.userType = "";
    state.page = 1;
    document.getElementById("searchInput").value = "";
    document.getElementById("searchFieldSelect").value = "all";
    document.getElementById("filterStatus").value = "";
    document.getElementById("filterRegion").value = "";
    document.getElementById("filterDivision").value = "";
    document.getElementById("filterUserType").value = "";
    render();
  });

  document.getElementById("tableHeadRow").addEventListener("click", (e) => {
    const th = e.target.closest("th[data-key]");
    if (!th) return;
    const key = th.dataset.key;
    if (state.sortKey === key) {
      state.sortDir = state.sortDir === "asc" ? "desc" : "asc";
    } else {
      state.sortKey = key;
      state.sortDir = "asc";
    }
    render();
  });

  document.getElementById("paginationList").addEventListener("click", (e) => {
    const link = e.target.closest("a.page-link");
    if (!link) return;
    e.preventDefault();
    const page = parseInt(link.dataset.page, 10);
    const li = link.closest(".page-item");
    if (
      !page ||
      li.classList.contains("disabled") ||
      li.classList.contains("active")
    )
      return;
    state.page = page;
    render();
  });

  // ADD / EDIT USER MODAL
  const userModalEl = document.getElementById("userModal");
  const userModal = new bootstrap.Modal(userModalEl);
  const userForm = document.getElementById("userForm");

  document.getElementById("addUserBtn").addEventListener("click", () => {
    userForm.reset();
    document.getElementById("userId").value = "";
    document.getElementById("userModalLabel").textContent = "Add User";
    document.getElementById("userFormSubmitBtn").textContent = "Add User";
  });

  document.getElementById("tableBody").addEventListener("click", (e) => {
    const editBtn = e.target.closest('[data-action="edit"]');
    const toggleBtn = e.target.closest('[data-action="toggle"]');

    if (editBtn) {
      const user = users.find((u) => u.id === editBtn.dataset.id);
      if (!user) return;
      document.getElementById("userId").value = user.id;
      document.getElementById("userFirstName").value = user.firstName;
      document.getElementById("userLastName").value = user.lastName;
      document.getElementById("userUsername").value = user.username;
      document.getElementById("userGroup").value = user.group;
      document.getElementById("userType").value = user.userType;
      document.getElementById("userDivision").value = user.division;
      document.getElementById("userRegion").value = user.region;
      document.getElementById("userStatus").value = user.status;
      document.getElementById("userModalLabel").textContent = "Edit User";
      document.getElementById("userFormSubmitBtn").textContent = "Save Changes";
      userModal.show();
    }

    if (toggleBtn) {
      const user = users.find(
        (u) => u.id === toggleBtn.dataset.id,
      );
      if (!user) return;
      const willDisable = user.status !== "Inactive";
      document.getElementById("confirmModalLabel").textContent = willDisable
        ? "Disable user"
        : "Enable user";
      document.getElementById("confirmModalBody").textContent =
        `Are you sure you want to ${willDisable ? "disable" : "enable"} ${user.firstName} ${user.lastName}?`;
      const actionBtn = document.getElementById("confirmModalActionBtn");
      actionBtn.textContent = willDisable ? "Disable" : "Enable";
      actionBtn.className =
        "btn btn-sm " + (willDisable ? "btn-danger" : "btn-success");
      actionBtn.onclick = () => {
        user.status = willDisable ? "Inactive" : "Active";
        confirmModal.hide();
        render();
        showToast(
          `${user.firstName} ${user.lastName} was ${willDisable ? "disabled" : "enabled"}.`,
        );
      };
      confirmModal.show();
    }
  });

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const id = document.getElementById("userId").value;
    const data = {
      firstName: document.getElementById("userFirstName").value.trim(),
      lastName: document.getElementById("userLastName").value.trim(),
      username: document.getElementById("userUsername").value.trim(),
      group: document.getElementById("userGroup").value,
      userType: document.getElementById("userType").value,
      division: document.getElementById("userDivision").value,
      region: document.getElementById("userRegion").value,
      status: document.getElementById("userStatus").value,
    };

    if (id) {
      const user = users.find((u) => u.id === id);
      Object.assign(user, data);
      showToast(`Changes saved for ${data.firstName} ${data.lastName}.`);
    } else {
      const today = formatToday();
      users.unshift({
        id: id || generateID(),
        ...data,
        submittedDate: today,
        enabledDate: data.status === "Active" ? today : "-",
      });
      state.page = 1;
      showToast(`${data.firstName} ${data.lastName} was added.`);
    }

    userModal.hide();
    refreshFilterOptions();
    render();
  });

  function formatToday() {
    const d = new Date();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${mm}/${dd}/${d.getFullYear()}`;
  }

  // CONFIRM MODAL INSTANCE
  const confirmModal = new bootstrap.Modal(
    document.getElementById("confirmModal")
  );

  /* function showMessage(message) {
    const modal = document.getElementById("messageModal");
    modal.getElementById("messageModalBody").innerHTML = message;
    
    new bootstrap.Modal(modal, {
      backdrop: 'static'
    });
  } */

  // INIT
  populateFormSelects();
  refreshFilterOptions();
  render();
})();
