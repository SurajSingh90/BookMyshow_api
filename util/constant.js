
const releaseStatus={

    released:"RELEASED",
    unreleased:"UNRELEASED",
    blocked:"BLOCKED"
}

const userTypes ={
    customer:"CUSTOMER",
    client:"CLIENT",
    admin:"ADMIN"
}

const userStatus = {
    pending:"PENDING",
    approved:"APPROVED",
    rejected:"REJECTED"
}
const bookingStatus={
    inProgress:"IN_PROGRESS",
    completed:"COMPLETED",
    cancelled:"CANCELLED",
    expired:"EXPIRED"
}

const paymentStatus = {
    pending:"PENDING",
    success:"SUCCESS",
    failed:"FAILED"
}

module.exports = {
    releaseStatus,
    userTypes,
    userStatus,
    bookingStatus,
    paymentStatus
}