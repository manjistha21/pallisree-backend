export default function RemoveBtn({ id }){
    const removeStudent = async () => {
        const confirmed = confirm("Are you sure you want to remove this student?");

        if (confirmed) {
            const res = await fetch(`http://localhost:3001/api/studentform?id=${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                router.refresh();
            }
    }
};