

export const formatRole = (role) => {
    switch (role) {
        case 'ROLE_SUSER':
            return 'Super User';
        case 'ROLE_USER':
            return 'User';
        case 'ROLE_EMPLOYER':
            return 'Employer';
        case 'ROLE_SYS_ADMIN':
            return 'System Admin';
        case 'ROLE_CLIENT_ADMIN':
            return 'Client Admin';
        case 'ROLE_TEST':
            return 'Testing';
        case 'ROLE_RECRUITER':
            return 'Recruiter';
        case 'ROLE_AGENCY':
            return 'Agency';
        case 'ROLE_OPERATOR':
            return 'Operator';
        default:
            return 'Unknown';
    }
}