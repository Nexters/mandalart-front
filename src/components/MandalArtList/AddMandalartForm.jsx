import React from 'react';

class AddMandalArtForm extends React.Component {
    render() {
        return(
            <div>
                <div>새 만다라트 추가</div>
                <div>제목</div>
                <input 
                    type="text"
                    name="title"
                    placeholder="제목없는 만다라트"
                />
                <div>기간</div>
                <input
                    type="text"
                    name="startDate"
                    placeholder="2018.08.03"
                />
                <input
                    type="text"
                    name="endDate"
                    placeholder="2018.10.03"
                />
                <button>
                    Cancel
                </button>
                <button>
                    OK
                </button>
            </div>>
        )
    }
}

export default AddMandalArtForm;