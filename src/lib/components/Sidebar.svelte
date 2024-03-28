<script>
    let user ='./images/user-icon.png'
    let history ='./images/history-icon.png'
    let about ='./images/about-icon.png'
    let home ='./images/home-icon.png'
    let profile = './images/profile-picture.png'
    let background ='./images/background-image.png'
</script>

<div class="sidebar">
    <div class="menu">
        <div class="profile-info">
            <div class="profile">
                <!-- dummy profile picture -->
                <img src={profile} alt="Profile Picture" class="profile-picture"> 
            </div>
            <p class="username">Agnik Paul</p>
            <p class="email">23phcs01@kristujayanti.com</p>
        </div>
        <div class="home-container">
            <a href="/home"><img src={home} alt="Home" class="icon">Home</a>
        </div>
        <div class="history-container">
            <a href="/users"><img src={user} alt="Users" class="icon">Users</a>
        </div>
        <a href="/history"><img src={history} alt="History" class="icon">History</a>
        <div class="about-container">
            <a href="/about"><img src={about} alt="About" class="icon">About</a>
        </div>
    </div>
    <button class="sign-out">Sign Out</button>
    <p class="version">Version 1.0.0</p>
</div>

<style>
    .sidebar {
    width: 100%;
    max-width: 300px;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #e0e0e0;
    padding: 20px;
    position: relative;
    background-image: url("./images/background-image.png"), linear-gradient(to bottom right, #ffffff, #f0f0f0);
    background-size: cover; /* Adjust this as needed */
    background-position: center; /* Adjust this as needed */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    /* border-radius: 10px; */
}

    
    .profile {
        margin-bottom: 20px;
    }

    .profile-picture {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border: 3px solid #ffffff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .profile-info {
        margin-bottom: 20px;
        text-align: center;
    }

    .username,
    .email {
        color: #333333;
        margin: 0;
    }

    .menu {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; 
        border-radius: 10px;
        padding: 10px;
        margin-top: 120px;
        background-color: rgba(255, 255, 255, 0.9); 
    }

    .menu a {
        color: #333333;
        text-decoration: none;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        transition: background-color 0.3s ease;
        padding: 10px;
        border-radius: 5px;
    }

    .menu a:hover {
        background-color: #f0f0f0;
    }

    .icon {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }

    .sign-out {
        background-color: #ffffff;
        color: #e53935;
        border: 2px solid #e53935;
        padding: 10px 20px;
        cursor: pointer;
        font-size: 16px;
        border-radius: 5px;
        transition: background-color 0.3s ease;
    }

    .sign-out:hover {
        background-color: #e53935;
        color: #ffffff;
    }

    .version {
        font-size: 12px;
        color: #757575;
    }

    @media (max-width: 768px) {
        .sidebar {
            width: 100%;
            max-width: none;
        }
    }
</style>
